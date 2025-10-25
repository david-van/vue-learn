<script setup lang="ts">
// import { Edit } from '@element-plus/icons-vue'
</script>

<template>
  <el-button type="primary" size="small">Primary</el-button>
  <!--  <el-row justify="center">-->
  <!-- 默认的不行 -->
  <!-- <el-icon><Female /></el-icon> -->
  <p>--------1-------------</p>
  <!-- 配置为 prefix: "icon" 时 -->
  <el-icon size="20px"><icon-ep-MessageBox /></el-icon>
  <p>--------2-------------</p>
  <el-icon><icon-ep-female /></el-icon>
  <el-icon><icon-ep-add-location /></el-icon>
  <p>---------3------------</p>
  <el-icon size="20px"><IconDocumentation /></el-icon>
  <el-icon size="40px"><IconMylogo /></el-icon>
  <p>----------4---------------</p>
  <icon-mdi-arrow-left-top-bold
    v-bind:style="{ width: '40px', height: '40px', color: '#ff0000' }"
  />

  <icon-mdi-arrow-right-thin-circle-outline
    v-bind:style="{ width: '40px', height: '40px', fill: '#ff0000 !important', color: 'red' }"
  />
  <p>----------5---------------</p>
  <icon-el-edit :style="{ width: '40px', height: '40px', color: 'red' }" />
  <p>----------6---------------</p>
  <el-icon size="40px">
    <Edit></Edit>
  </el-icon>
  <Edit :style="{ width: '50px', height: '50px', color: 'red' }"></Edit>

  <!-- prefix: "fct" -->
  <!--    <el-icon><FctEpApple /></el-icon>-->

  <!-- prefix走默认配置时  -->
  <!-- <el-icon><i-ep-add-location /></el-icon> -->

  <!-- 禁用prefix配置时, prefix: false  -->
  <!--    <el-icon><ep-MessageBox /></el-icon>-->
  <!--    <el-icon><EpSuccessFilled /></el-icon>-->
  <!--  </el-row>-->
</template>

<style scoped></style>
