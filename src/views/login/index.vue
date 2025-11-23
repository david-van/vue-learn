<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/stores/modules/user.ts'
import type { LoginFormData } from '@/api/user/types.ts'
import { useRouter } from 'vue-router'
import { getTime } from '@/utils/time.ts'
import type { FormRules } from 'element-plus'

const loginForm = ref<LoginFormData>({
  username: '',
  password: '',
})
const loginFormRef = ref()
const userStore = useUserStore()
const router = useRouter()
const load = ref(false)

const login = async () => {
  try {
    await loginFormRef.value.validate()
    load.value = true
    await new Promise((resolve) => setTimeout(resolve, 500))
    await userStore.userLogin(loginForm.value)
    load.value = false
    await new Promise((resolve) => setTimeout(resolve, 500))
    router.push('/')
    const messageTime = getTime()
    ElNotification({
      title: `hi,${messageTime}好`,
      type: 'success',
      message: '欢迎回来',
    })
  } catch (e) {
    console.log('e is %O', e)
    load.value = false
  }
}
const validatorUserName = (rule: any, value: string, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位呀......'))
  }
}
const rules = reactive<FormRules<LoginFormData>>({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    // { min: 5, max: 10, message: '账号长度为5-10位', trigger: 'blur' },
    { validator: validatorUserName, trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '密码长度为6-10位', trigger: 'blur' },
  ],
})
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">占位的位置</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginFormRef">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
