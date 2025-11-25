<script setup lang="ts">
// 定义menuList的类型
// defineProps<{ menuList: RouteRecordRaw[] }>()
//  import { computed } from 'vue'

defineProps(['menuList'])
// 过滤掉没有 meta 或 name 的菜单项
// const filteredMenuList = computed(() => {
//   return menuList.filter(item => {
//     // 只保留有 meta.title 或 name 的项
//     return item.meta?.title || item.name
//   })
// })
</script>
<script lang="ts">
export default {
  name: 'subMenu',
}
</script>

<template>
  <template v-for="(item, index) in menuList" :key="index">
    <template v-if="!(item.meta && item.meta.hideMenu)">
      <el-menu-item v-if="!item.children" :index="item.path">
        <template #title>
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ item.meta?.title || item.name }}</span>
        </template>
      </el-menu-item>
      <el-menu-item v-if="item.children && item.children.length == 1" :index="item.path">
        <template #title>
          <el-icon><component :is="item.children[0].meta.icon"></component></el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
        <template #title>
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ item.meta?.title || item.name }}</span>
        </template>
        <subMenu :menuList="item.children"></subMenu>
      </el-sub-menu>
    </template>
  </template>
</template>

<style scoped></style>
