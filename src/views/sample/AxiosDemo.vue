<script setup lang="ts">
import request from '@/utils/request.ts'
// 发起一个post请求
function sendReq() {
  console.log('start')
  const result = request.get('/user/id')
  console.log(result)
}
</script>

<template>
  <el-button type="primary" @click="sendReq"> 发起请求 </el-button>
  <button v-on:click="sendReq">测试</button>
</template>

<style scoped></style>
