<template>
  <div>
    <collapseTransition>
      <div v-if="isShow" class="container">
        <div class="docs">
          <slot name="highlight"></slot>
        </div>
      </div>
    </collapseTransition>
    <span class="docs-trans" @click="isShow = !isShow">{{isShow ? '隐藏代码' : '显示代码'}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: false
      };
    }
  };
</script>
<style lang="stylus" scoped>
  @import "../assets/styl/var.styl"

  .container
    transition: max-height .3s ease;
    overflow: hidden;

  .docs
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #F7F7F7;
    border: 1px solid $color-border;
    border-top: none;
    padding: 0 20px;
    overflow-y: auto;
    display: block;

  .docs-trans
    width: 100%;
    text-align: center;
    display: inline-block;
    color: #73818c;
    cursor: pointer;
    font-size: 14px;
    line-height: 44px;
    height: 44px;
    background-color: #fafbfc;
    border-left: 1px solid $color-border;
    border-bottom: 1px solid $color-border;
    border-right: 1px solid $color-border;
    &:hover
      color #0086b3


</style>

