<script setup lang="ts">
import Logo from '@/layout/logo.vue'
</script>

<template>
  <div class="layout_container">
    <!--    左侧导航-->
    <div class="layout_slider">
      <Logo></Logo>
    </div>
    <!--    顶部导航-->
    <div class="layout_top">顶部导航</div>
    <!--    数据展示区-->
    <div class="layout_data"><p style="background: red; height: 10000px">数据展示区</p></div>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background: red;
  .layout_slider {
    width: $layout_menu_left_width;
    height: 100vh;
    background-color: $layout_menu_left_background;
  }
  .layout_top {
    width: calc(100% - $layout_menu_left_width);
    height: $layout_menu_top_height;
    position: fixed;
    top: 0;
    left: $layout_menu_left_width;
    background-color: cyan;
  }
  .layout_data {
    position: absolute;
    width: calc(100% - $layout_menu_left_width);
    height: calc(100% - $layout_menu_top_height);
    top: $layout_menu_top_height;
    left: $layout_menu_left_width;
    background-color: yellow;
    padding: 20px;
    overflow: auto;
  }
}
</style>
