<style lang="stylus" scoped>
  .demo-block {
    >div {
      margin-bottom: 20px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>

# Button 按钮

----
采用`element-ui`中的样式变量，简化功能，熟悉 css \(^o^)/~。

### 基础用法

- 基础的按钮用法,使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <h-button>默认按钮</h-button>
    <h-button type="primary">主要按钮</h-button>
    <h-button type="success">成功按钮</h-button>
    <h-button type="info">信息按钮</h-button>
    <h-button type="warning">警告按钮</h-button>
    <h-button type="danger">危险按钮</h-button>
  </div>
  
  <div>
    <h-button plain>朴素按钮</h-button>
    <h-button type="primary" plain>主要按钮</h-button>
    <h-button type="success" plain>成功按钮</h-button>
    <h-button type="info" plain>信息按钮</h-button>
    <h-button type="warning" plain>警告按钮</h-button>
    <h-button type="danger" plain>危险按钮</h-button>
  </div>
  
  <div>
    <h-button round>圆角按钮</h-button>
    <h-button type="primary" round>主要按钮</h-button>
    <h-button type="success" round>成功按钮</h-button>
    <h-button type="info" round>信息按钮</h-button>
    <h-button type="warning" round>警告按钮</h-button>
    <h-button type="danger" round>危险按钮</h-button>
  </div>
  
  <div>
    <h-button icon="h-icon-app" circle></h-button>
    <h-button type="primary" icon="h-icon-sql" circle></h-button>
    <h-button type="success" icon="h-icon-text" circle></h-button>
    <h-button type="info" icon="h-icon-addition" circle></h-button>
    <h-button type="warning" icon="h-icon-addition" circle></h-button>
    <h-button type="danger" icon="h-icon-addition" circle></h-button>
  </div>
</div>

:::demo 



```html
  <div>
    <h-button>默认按钮</h-button>
    <h-button type="primary">主要按钮</h-button>
    <h-button type="success">成功按钮</h-button>
    <h-button type="info">信息按钮</h-button>
    <h-button type="warning">警告按钮</h-button>
    <h-button type="danger">危险按钮</h-button>
  </div>
  
  <div>
    <h-button plain>朴素按钮</h-button>
    <h-button type="primary" plain>主要按钮</h-button>
    <h-button type="success" plain>成功按钮</h-button>
    <h-button type="info" plain>信息按钮</h-button>
    <h-button type="warning" plain>警告按钮</h-button>
    <h-button type="danger" plain>危险按钮</h-button>
  </div>
  
  <div>
    <h-button round>圆角按钮</h-button>
    <h-button type="primary" round>主要按钮</h-button>
    <h-button type="success" round>成功按钮</h-button>
    <h-button type="info" round>信息按钮</h-button>
    <h-button type="warning" round>警告按钮</h-button>
    <h-button type="danger" round>危险按钮</h-button>
  </div>
  
  <div>
    <h-button icon="h-icon-app" circle></h-button>
    <h-button type="primary" icon="h-icon-sql" circle></h-button>
    <h-button type="success" icon="h-icon-text" circle></h-button>
    <h-button type="info" icon="h-icon-addition" circle></h-button>
    <h-button type="warning" icon="h-icon-addition" circle></h-button>
    <h-button type="danger" icon="h-icon-addition" circle></h-button>
  </div>

```
:::

### 禁用状态

- 按钮不可用状态。
<div class="demo-block">
   <div>
     <h-button disabled>默认按钮</h-button>
     <h-button type="primary" disabled>主要按钮</h-button>
     <h-button type="success" disabled>成功按钮</h-button>
     <h-button type="info" disabled>信息按钮</h-button>
     <h-button type="warning" disabled>警告按钮</h-button>
     <h-button type="danger" disabled>危险按钮</h-button>
   </div>
   
   <div>
     <h-button plain disabled>朴素按钮</h-button>
     <h-button type="primary" plain disabled>主要按钮</h-button>
     <h-button type="success" plain disabled>成功按钮</h-button>
     <h-button type="info" plain disabled>信息按钮</h-button>
     <h-button type="warning" plain disabled>警告按钮</h-button>
     <h-button type="danger" plain disabled>危险按钮</h-button>
   </div>
</div>

:::demo

```html
<div>
  <h-button disabled>默认按钮</h-button>
  <h-button type="primary" disabled>主要按钮</h-button>
  <h-button type="success" disabled>成功按钮</h-button>
  <h-button type="info" disabled>信息按钮</h-button>
  <h-button type="warning" disabled>警告按钮</h-button>
  <h-button type="danger" disabled>危险按钮</h-button>
</div>

<div>
  <h-button plain disabled>朴素按钮</h-button>
  <h-button type="primary" plain disabled>主要按钮</h-button>
  <h-button type="success" plain disabled>成功按钮</h-button>
  <h-button type="info" plain disabled>信息按钮</h-button>
  <h-button type="warning" plain disabled>警告按钮</h-button>
  <h-button type="danger" plain disabled>危险按钮</h-button>
</div>
```
:::

### 文字按钮

没有边框和背景色的按钮。

<div class="demo-block">
  <h-button type="text">文字按钮</h-button>
  <h-button type="text" disabled>文字按钮</h-button>
</div>

:::demo
```html
<h-button type="text">文字按钮</h-button>
<h-button type="text" disabled>文字按钮</h-button>
```
:::

### 图标按钮

- 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
- 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

<div class="demo-block">
  <h-button type="primary" icon="h-icon-addition"></h-button>
  <h-button type="primary" icon="h-icon-addition"></h-button>
  <h-button type="primary" icon="h-icon-addition"></h-button>
  <h-button type="primary" icon="h-icon-addition">搜索</h-button>
  <h-button type="primary">上传<i class="h-icon-addition"></i></h-button>
</div>

:::demo 
```html
<h-button type="primary" icon="h-icon-addition"></h-button>
<h-button type="primary" icon="h-icon-addition"></h-button>
<h-button type="primary" icon="h-icon-addition"></h-button>
<h-button type="primary" icon="h-icon-addition">搜索</h-button>
<h-button type="primary">上传<i class="h-icon-addition"></i></h-button>
```
:::


### 不同尺寸

- Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<div class="demo-block">
  <div>
    <h-button>默认按钮</h-button>
    <h-button size="medium">中等按钮</h-button>
    <h-button size="small">小型按钮</h-button>
    <h-button size="mini">超小按钮</h-button>
  </div>
  <div>
    <h-button round>默认按钮</h-button>
    <h-button size="medium" round>中等按钮</h-button>
    <h-button size="small" round>小型按钮</h-button>
    <h-button size="mini" round>超小按钮</h-button>
  </div>
</div>

:::demo 
```html
<div>
  <h-button>默认按钮</h-button>
  <h-button size="medium">中等按钮</h-button>
  <h-button size="small">小型按钮</h-button>
  <h-button size="mini">超小按钮</h-button>
</div>
<div>
  <h-button round>默认按钮</h-button>
  <h-button size="medium" round>中等按钮</h-button>
  <h-button size="small" round>小型按钮</h-button>
  <h-button size="mini" round>超小按钮</h-button>
</div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
