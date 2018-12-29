<script>
  var iconList = require('@/icon.json');
  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/styl/var.styl"
  .demo-block
    i
     font-size:20px
     margin-left:20px
    
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;
    border: 1px solid $color-border;
    margin-right: -1px;
    margin-bottom: -1px;
    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #3f536e;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>

# Icon 图标

----
```Hai-UI``` 使用开源的阿里 Iconfont 作为图标库，并制作成了 ```icon font```。


### 使用

使用 ```class="h-icon-?"``` 来声明图标，具体图标的名称请 ```copy``` 相应的标签

<div class="demo-block">
  <i class="h-icon-app"></i>
  <i class="h-icon-sql"></i>
  <i class="h-icon-text"></i>
  <i class="h-icon-addition"></i>
</div>

::: demo
```html

<i class="h-icon-app"></i>
<i class="h-icon-sql"></i>
<i class="h-icon-text"></i>
<i class="h-icon-addition"></i>

```
:::

### 图标库

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'h-' + name"></i>
      {{'h-' + name}}
    </span>
  </li>
</ul>
