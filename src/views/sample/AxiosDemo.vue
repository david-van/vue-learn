<script setup lang="ts">
import type { LoginFormData } from '@/api/user/types.ts'
import { reqLogin } from '@/api/user'

// 发起一个post请求
async function sendReq() {
  console.log('start111')
  // request.get('/user/id')
  //   .then((res) => {
  //   console.log(res)
  // })
  // const result = await request.get('/user/id')
  // console.log(result)
  const params: LoginFormData = {
    username: 'admin',
    password: '111111',
  }
  const result = await reqLogin(params)
  console.log(result)

  console.log(result.token)
}
</script>

<template>
  <el-button type="primary" @click="sendReq"> 发起请求 </el-button>
  <button v-on:click="sendReq">测试</button>
</template>

<style scoped></style>
