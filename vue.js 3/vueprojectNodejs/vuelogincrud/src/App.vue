<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/itemList">상품 목록</RouterLink>
  </nav>
  <RouterView />
</template>
<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  min-height: 100vh;
  background: url('@/assets/altumcode-PNbDkQ2DDgM-unsplash.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;
}
</style>
