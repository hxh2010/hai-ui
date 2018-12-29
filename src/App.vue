<template>
  <div id="app">
    <Header></Header>
    <div class="app-main">
      <div class="app-main-left">
        <Menu></Menu>
      </div>
      <div class="app-main-right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from './components/menu.vue';
  import Header from './components/header.vue';
export default {
  name: 'App',
  components:{
    Menu,Header
  }
}
</script>

<style lang="stylus">
#app
  .app-main
    display: flex;
    min-width: 1101px;
    margin: 0 auto 50px auto;
    width: 85%;
    .app-main-left
      min-width 230px
      position relative
    .app-main-right
      position relative
      padding-top 15px
      flex 1
</style>
