<!---->
<template>
  <div class="test">
    <!--<New></New>-->
    <transition name="dialog-fade">
      <div class="msg" v-if="isShow">
        123
        <h-button @click="isShow = false">X</h-button>
      </div>
    </transition>
    <h-button @click="test">测试</h-button>
    <h-button @click="test1">测试1</h-button>
    <h-button @click="test2">测试2</h-button>
    <h-button @click="test3">测试3</h-button>
    <h-button v-repeat-click="tst">
      测试一下
    </h-button>
  </div>
</template>

<script>
  import Message from '../../package/message';
  import RepeatClick from '../../package/directives/repeat-click.js'

  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      test() {
        Message({
          isButton: true,
          message: '这是一条消息提示',
          duration: 0,
          buttonText: ['确定操作', '其他操作'],
          onClose: (data) => {
            console.log(data)
          }
        });
      },
      tst() {
        console.log(123)
      },

      test1() {
        this.$message({
          isButton: true, type: 'error', message: '这是一条消息提示', duration: 0,
          onClose: (data) => {
            console.log(data)
          }
        });
      },
      test2() {
        this.$message({isButton: true, type: 'success', message: '这是一条消息提示', duration: 0});
      },
      test3() {
        this.$message({isButton: true, type: 'warning', message: '这是一条消息提示', duration: 0});
      },
    },
    directives: {
      RepeatClick
    },
    computed: {},
    components: {},
    mounted() {

    },
  }
</script>
<style scoped lang="stylus">
  .test
    padding 20px
    position: relative;
    width: 100%;
    height: 100%;
    border 1px solid #0086b3

</style>
<style scoped lang="stylus">
  .msg
    margin: 0 auto 50px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    position: fixed;
    height 250px
    width 300px
    left: 50%;
    top: 20px;
    background-color: #fff;
    border 1px solid #000

  /*
  transition: opacity 0.4s, transform .4s;
  overflow: hidden;
  padding: 5px 20px;
  display: flex;
  align-items: center;*/

  .dialog-fade-enter-active {
    animation: dialog-fade-in .3s;
  }

  .dialog-fade-leave-active {
    animation: dialog-fade-out .3s;
  }


</style>
