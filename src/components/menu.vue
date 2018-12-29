<!--左侧菜单-->
<template>
  <div class="menu">
    <div v-for="title in (Object.keys(data))" class="group-container">
      <p class="menu-title">{{title}}</p>
      <div class="menu-items" v-for="nav in data[title]" v-if="nav.desc">
        <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav.name" :to="{name: nav.name}">
          {{nav.desc}}
        </router-link>
        <p v-else class="menu-group">{{nav.desc}}</p>
        <div class="menu-items-son" v-for="item in nav.items">
          <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''"
                       class="menu-component">{{item.desc}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import routerConfig from '@/router/router.json/'

  export default {
    data() {
      return {
        data: routerConfig
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/styl/var.styl"
  .menu
    display: inline-block;
    margin: 32px 0;
    padding: 0 10px;
    color: #3F536E;
    background-color: #fff;
    z-index: 99;
    .group-container
      margin-bottom: 15px;
    .menu-title
      font-size: 16px;
      color: $color-primary;
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: .15s ease-out;
      font-weight: 700;
    .menu-items
      font-size: 15px;
      font-weight: normal;
      line-height: 1.8;
      a
        display: block;
        position: relative;
        padding: 8px 24px;
        color: #3F536E;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
      .menu-group
        padding: 4px 0 4px 16px;
        font-size: 15px;
        color: lighten($color-primary, 30%);
        font-weight: 600;
      .menu-component
        display: block;
        position: relative;
        padding: 6px 24px 6px 32px;
        color: #616367;
        font-size: 15px;
      .active, a:hover
        color: darken($color-primary, 50%);
        font-weight 600
</style>
