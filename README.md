# 111 hai-ui  嗨！o(*￣︶￣*)o

> `Hai-UI` 是一款基于 `Vue` ，在学习```element-ui``` 源码的闲暇之余，**吃饱了撑着** 开发出来用于学习交流的前端 UI 组件库。
- `在线演示：` [Hai-UI](https://120.79.75.161:10086/ "o(*￣︶￣*)o")

### 由来

- 项目需要。
- 更好的学习 `element` ，如果只是看，真的很容易忘
- 与其不一样的是，项目的样式采用的是stylus。
- 虽然大部分是致敬的，但也加入一些自己的组件。
- 一些项目用到的消息提示，分页
- 鼠标滚轮控制的走马灯


### 安装

```bash
npm install hai-ui --save
```

### 使用

#### 全局使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import HaiUI from 'hai-ui' // 引入组件库
import 'hai-ui/packages/theme-set/lib/index.css' // 引入样式库

Vue.use(HaiUI)
```

在模板中，用 `<h-button></h-button>` 自定义标签的方式使用组件

```html
<template>
  <h-button>这是一个按钮</h-button>
</template>
```

#### 自定义主题

`UI` 基于stylus,可修改 `hai-ui/packages/theme-set/common/var.css` 文件自定义主题


### 问题

在使用 `Hai-UI` 时遇到问题，或者有好的建议，欢迎提出来，反正不会改！skr，skr，O(∩_∩)O~
