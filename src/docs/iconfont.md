
# iconfont

----
- 将阿里图标官网下载的文件，在demo_unicode.html中引入```jquery```加入如下代码，生成图标JSON文件内容及样式表内容，粘贴到对应的地方

```js
  let iconJson = ``;
  let iconStyle = [];
  
  $(`.icon_lists>li`).each(function() {
    let name = $(this).find(`.name`).html();
    let code =$(this).find(`.code`).html().replace('&amp;#x','').replace(';','')

    iconJson += '.h-icon-'+name+':before { content: "\\'+code + '"; }\n';
    iconStyle.push(`icon-${name}`)
  })
  
  console.log(iconJson);
  console.log(JSON.stringify(iconStyle));
```
- iconStyle：图标样式，拷贝至icon.styl
- iconJson：图标json，方便遍历
