# Markdown o(*￣︶￣*)o

---
## 基本语法
- 由于之前对`markdown`了解并不多，这次恶补了下

```text
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题

**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~

>这是引用的内容
>>这是引用的内容
>>>>>>>>>>这是引用的内容

---分割线
----分割线
***分割线
*****分割线

![图片alt](图片地址 ''图片title'')

[超链接名](超链接地址 "超链接title")

1.列表内容
2.列表内容
3.列表内容

注意：序号跟内容之间要有空格
``` 

## 相关依赖

```bash
> cnpm i -S cheerio draggabilly highlight.js inquirer
> cnpm i -S markdown-it-anchor markdown-it-container moment 
> cnpm i -S path striptags stylus stylus-loader transliteration
```

## strip-tags.js

```javascript
 'use strict';
 var cheerio = require('cheerio');
 
 //在生成组件效果展示时,解析出的VUE组件有些是带<script>和<style>的,我们需要先将其剔除,之后使用
 exports.strip = function(str, tags) {
   var $ = cheerio.load(str, {decodeEntities: false});
   if (!tags || tags.length === 0)  return str;
   tags = !Array.isArray(tags) ? [tags] : tags;
   var len = tags.length;
   while (len--)  $(tags[len]).remove();
   return $.html(); // cheerio 转换后会将代码放入<head>中
 };
 
 //获取标签中的文本内容
 exports.fetch = function(str, tag) {
   var $ = cheerio.load(str, {decodeEntities: false});
   if (!tag) return str;
   return $(tag).html();
 };
```

## webpack.base.config.js添加

```javascript
const md = require('markdown-it')(); // 引入markdown-it
const slugify = require('transliteration').slugify; // 引入transliteration中的slugify方法
const striptags = require('./strip-tags'); // 引入刚刚的工具类

//由于cheerio在转换汉字时会出现转为Unicode的情况,所以我们编写convert方法来保证最终转码正确
function convertHtml(str) {
  return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}

//由于v-pre会导致在加载时直接按内容生成页面.但是我们想要的是直接展示组件效果,通过正则进行替换
function wrapCustomClass(render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

const vueMarkdown = {
  use: [
    [require('markdown-it-anchor'), {
      level: 2, // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
      slugify: slugify, // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
      permalink: true, // 开启标题锚点功能
      permalinkBefore: true // 在标题前创建锚点
    }],
    // 'markdown-it-container'的作用是自定义代码块

    [require('markdown-it-container'), 'demo', {
      // 当我们写::: demo :::这样的语法时才会进入自定义渲染方法
      validate: function (params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },
      // 自定义渲染方法,这里为核心代码
      render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        // nesting === 1表示标签开始
        if (tokens[idx].nesting === 1) {
          // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
          var description = (m && m.length > 1) ? m[1] : '';
          // 获得内容
          var content = tokens[idx + 1].content;
          // 解析过滤解码生成html字符串
          var html = convertHtml(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
          // 获取script中的内容
          var script = striptags.fetch(content, 'script');
          // 获取style中的内容
          var style = striptags.fetch(content, 'style');
          // 组合成prop参数,准备传入组件
          var jsfiddle = {html: html, script: script, style: style};
          // 是否有描述需要渲染
          var descriptionHTML = description
            ? md.render(description)
            : '';
          // 将jsfiddle对象转换为字符串,并将特殊字符转为转义序列
          jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));
          // 起始标签,写入demo-block模板开头,并传入参数
          return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                            <div class="source" slot="source">${html}</div>
                            ${descriptionHTML}
                            <div class="highlight" slot="highlight">`;
        }
        // 否则闭合标签
        return '</div></demo-block>\n';
      }
    }],
    [require('markdown-it-container'), 'tip'],
    [require('markdown-it-container'), 'warning']
  ],
  // 定义处理规则
  preprocess: function (MarkdownIt, source) {
    // 对于markdown中的table,
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">';
    };
    // 对于代码块去除v-pre,添加高亮样式
    MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence);
    return source;
  }
}
//添加规则
//  {
//     test: /\.md$/,
//     loader: 'vue-markdown-loader',
//     options: vueMarkdown
//   }
```

## demo-block

```html
<template>
  <div>
    <collapseTransition>
      <div v-if="isShow" class="container">
        <div class="docs">
          <slot name="highlight"></slot>
        </div>
      </div>
    </collapseTransition>
    <span class="docs-trans" @click="isShow = !isShow">{{isShow ? '隐藏代码' : '显示代码'}}</span>
  </div>
</template>
```

- 参考：[Element源码系列——Vue加载Markdown](https://blog.csdn.net/m0_37972557/article/details/81089887)
