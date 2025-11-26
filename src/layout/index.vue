<script setup lang="ts">
import Logo from '@/layout/logo.vue'
import Menu from '@/layout/menu/index.vue'
import useUserStore from '@/stores/modules/user.ts'
const userStore = useUserStore()

</script>

<template>
  <div class="layout_container">
    <!--    左侧导航-->
    <div class="layout_slider">
      <Logo></Logo>
      <!--      展示菜单-->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="$layout_menu_left_background" text-color="white">
          <Menu :menuList="userStore.menuRoute"></Menu>
          <!--          <el-menu-item index="1">首页</el-menu-item>-->
          <!--          <el-menu-item index="2">数据大屏</el-menu-item>-->
          <!--          <el-sub-menu index="3">-->
          <!--            <template #title>-->
          <!--              <span>权限管理</span>-->
          <!--            </template>-->
          <!--            <el-menu-item index="3-1">用户管理</el-menu-item>-->
          <!--            <el-menu-item index="3-2">角色管理</el-menu-item>-->
          <!--            <el-menu-item index="3-3">权限管理</el-menu-item>-->
          <!--          </el-sub-menu>-->
        </el-menu>
      </el-scrollbar>
    </div>
    <!--    顶部导航-->
    <div class="layout_top">顶部导航</div>
    <!--    数据展示区-->
    <div class="layout_data">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  position: relative; /* 添加相对定位 */
  background: red;
  .layout_slider {
    width: $layout_menu_left_width;
    height: 100vh;
    background-color: $layout_menu_left_background;
    color: white;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $layout-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
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
