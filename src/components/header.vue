<!---->
<template>
  <div class="header">
      <div class="logo">
        <img src="../assets/img/hai.png">
        <div>Hai-UI</div>
      </div>
      <div class="list">
        <div class="list-son" @click="$router.push({ path: '/icon' })">组件</div>
        <div class="list-son" @click="$router.push({ path: '/create' })">笔记</div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {},
    mounted() {

    },
  }
</script>
<style scoped lang="stylus">
  @import "../assets/styl/var.styl"
  .header
    height 80px
    min-width 500px
    line-height 80px
    background $color-primary
    display: flex;
    justify-content: space-between;
    .logo
      height: 80px;
      display: inline-flex;
      align-items: center;
      padding-left: 30px;
      &>div
        font-size: 35px;
        margin-left: 20px;
        color: $color-white;
      &>img
        width 50px
        height 50px
    .list
      height: 80px;
      display: inline-flex;
      padding-right 30px
      .list-son
        font-size: 18px;
        color: $color-white;
        padding: 0 30px;
        cursor pointer
        &:hover
          background  lighten($color-primary,30%)
</style>
