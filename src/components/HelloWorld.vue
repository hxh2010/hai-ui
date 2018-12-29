<template>
  <div class="hello">

    <info></info>
  </div>
</template>

<script type="text/babel">
  import info from '@/docs/icon.md/'; // 导入md文件
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      info // 注册组件
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hljs {
    line-height: 1.8;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: solid 1px #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
  }
</style>
