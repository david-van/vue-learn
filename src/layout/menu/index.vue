<script setup lang="ts">
// 定义menuList的类型
// defineProps<{ menuList: RouteRecordRaw[] }>()
defineProps(['menuList'])
</script>

<template>
  <div>
    <h1>{{ menuList }}</h1>
  </div>
  <template v-for="(item, index) in menuList" :key="index">
    <el-menu-item v-if="!item.children" :index="item.path">
      <template #title>
        <el-icon></el-icon>
        <span>{{ item.meta?.title || item.name }}</span>
      </template>
    </el-menu-item>
    <el-menu-item v-if="item.children && item.children.length == 1" :index="item.path">
      <template #title>
        <el-icon></el-icon>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu :index="item.path">
      <template #title>
        <el-icon></el-icon>
        <span>{{ item.meta?.title || item.name }}</span>
      </template>
    </el-sub-menu>
  </template>

  <!--          <el-menu-item index="2">数据大屏</el-menu-item>-->
  <!--          <el-sub-menu index="3">-->
  <!--            <template #title>-->
  <!--              <span>权限管理</span>-->
  <!--            </template>-->
  <!--            <el-menu-item index="3-1">用户管理</el-menu-item>-->
  <!--            <el-menu-item index="3-2">角色管理</el-menu-item>-->
  <!--            <el-menu-item index="3-3">权限管理</el-menu-item>-->
  <!--          </el-sub-menu>-->
</template>

<style scoped></style>
