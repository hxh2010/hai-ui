# Message 消息提示

----
- 这次有些不一样，点开看看吧 (#^.^#)

### 基础用法

- UI 注册了一个`$message`方法用于调用。

<div class="demo-block">
  <h-button plain @click="open1">消息</h-button>
  <h-button plain @click="open2">成功</h-button>
  <h-button plain @click="open3">警告</h-button>
  <h-button plain @click="open4">错误</h-button>
</div>

<script>
  export default {
    methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
      
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },
      
      open5() {
        this.$message({isButton:true,message:'这是一条消息提示'});
      },
      
      open6() {
        this.$message({
          isButton:true,
          message: '恭喜你，这是一条成功消息',
          type: 'success',
          buttonText:['喝香槟','去蹦迪'],
          onClose:(data)=>{
            //会返回相应buttonText
            console.log(data)
          }
        });
      },

      open7() {
        this.$message.error({
          isButton:true,
          message:'错了哦，这是一条错误消息',
          buttonText:['重新来','出去玩'],
          onClose:(data)=>{
            //会返回相应buttonText
            console.log(data)
          }
        });
      }
    }
  }
</script>


:::demo 

```html
<template>
  <h-button plain @click="open1">消息</h-button>
  <h-button plain @click="open2">成功</h-button>
  <h-button plain @click="open3">警告</h-button>
  <h-button plain @click="open4">错误</h-button>
</template>

<script>
  export default {
      methods: {
        open1() {
          this.$message('这是一条消息提示');
        },
        open2() {
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
        },
  
        open3() {
          this.$message({
            message: '警告哦，这是一条警告消息',
            type: 'warning'
          });
        },
  
        open4() {
          this.$message.error('错了哦，这是一条错误消息');
        }
      }
    }
</script>
```
:::

### 按钮状态
- 可传入`isButton`参数及`buttonText`参数，该参数会覆盖`iconClass`，不显示图标，只显示传入文本或默认文本，并取消自动关闭。
<div class="demo-block">
  <h-button plain @click="open5">成功</h-button>
  <h-button plain @click="open6">警告</h-button>
  <h-button plain @click="open7">错误</h-button>
</div>

:::demo 
```html
<template>
  <h-button plain @click="open5">成功</h-button>
  <h-button plain @click="open6">警告</h-button>
  <h-button plain @click="open7">错误</h-button>
</template>

<script>
  <script>
    export default {
        methods: {
          open5() {
            this.$message({isButton:true,message:'这是一条消息提示'});
          },
          
          open6() {
            this.$message({
              isButton:true,
              message: '恭喜你，这是一条成功消息',
              type: 'success',
              buttonText:['喝香槟','去蹦迪'],
              onClose:(data)=>{
                //会返回相应buttonText
                console.log(data)
              }
            });
          },
    
          open7() {
            this.$message.error({
              isButton:true,
              message:'错了哦，这是一条错误消息',
              buttonText:['重新来','出去玩'],
              onClose:(data)=>{
                //会返回相应buttonText
                console.log(data)
              }
            });
          }
      }
  </script>
</script>
```
:::

### 全局方法

Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用。

### 单独引用

单独引入：

```javascript
import { Message } from 'hai-ui';
```

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| iconClass | 自定义图标的类名，会覆盖 `type` | string | — | — |
| customClass | 自定义类名 | string | — | — |
| duration | 显示时间, 毫秒。设 0 或 isButton为true 则不自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | true |
| isButton | 按钮状态，会覆盖iconClass及默认图标 | boolean | — | false |
| buttonText | 按钮文本，仅在isButton为true时有效 | Array | — | ['确定','取消'] |
| onClose | 关闭回调, 参数为当前message 实例或 对应buttonText | function | — | — |

### 方法
调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
