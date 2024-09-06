<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
    router.push('/');
}
</script>

<template>
    <div class="success-container">
      <h2>회원가입 성공</h2>
      <p>회원가입이 성공적으로 완료되었습니다!</p>
      <button @click="goHome">Home으로 돌아가기</button>
    </div>
  </template>
  
  <style scoped>
  .success-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .success-container h2 {
    margin-bottom: 20px;
  }
  
  .success-container p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369b74;
  }
  </style>
  