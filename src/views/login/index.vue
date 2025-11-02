<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'
import { ref } from 'vue'
import useUserStore from '@/stores/modules/user.ts'
import type { LoginFormData } from '@/api/user/types.ts'
import { useRouter } from 'vue-router'

const loginForm = ref<LoginFormData>({
  username: 'admin',
  password: '111111',
})
const userStore = useUserStore()
const router = useRouter()
const load = ref(false)
const login = async () => {
  try {
    load.value = true
    await new Promise((resolve) => setTimeout(resolve, 500))
    await userStore.userLogin(loginForm.value)
    load.value = false
    await new Promise((resolve) => setTimeout(resolve, 500))
    router.push('/')
    ElNotification({
      title: '登录成功',
      type: 'success',
    })
  } catch (e) {
    console.log('e is %O', e)
    load.value = false
  }
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">占位的位置</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input v-model="loginForm.username" :prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              show-password
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="load" class="login_button" type="primary" v-on:click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.login_form {
  width: 80%;
  top: 30vh;
  position: relative;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px;
  h1 {
    color: white;
    font-size: 40px;
  }
  h2 {
    color: white;
    font-size: 20px;
    margin: 20px 0;
  }
  .login_button {
    width: 100%;
  }
}
</style>
