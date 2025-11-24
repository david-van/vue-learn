<script setup lang="ts">
import { logo_setting } from '@/setting.ts'
</script>

<template>
  <div class="logo">
    <img :src="logo_setting.logo" alt="我是logo" />
    <p>{{ logo_setting.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $layout-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: 20px;
    margin-left: 10px;
  }
}
</style>
