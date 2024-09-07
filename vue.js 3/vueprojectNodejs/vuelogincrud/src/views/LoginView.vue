<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { memberList } from '@/api/users';

const id = ref('');
const password = ref('');

const router = useRouter();

const login = async () => {
    if (id.value && password.value) {
      try {
      const response = await memberList({
      id: id.value,
      password: password.value
    });
    console.log('success:', response.data);
    alert(`로그인 성공 ${id.value} ${password.value}`);
    router.push('/loginSuccess');
    } catch (error) {
    console.error('Error:', error);
    }
    } else {
        alert(`아이디와 비밀번호를 입력해주세요.`);
    }
};

function memberJoin() {
    router.push('/memberJoin');
}

</script>

<template>
    <div class="login-container">
      <h2>로그인</h2>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="id">아이디</label>
          <input v-model="id" type="text" id="id" placeholder="아이디를 입력하세요" />
        </div>
        <div class="input-group">
          <label for="password">비밀번호</label>
          <input v-model="password" type="password" id="password" placeholder="비밀번호를 입력하세요" />
        </div>
          <button type="submit">로그인</button>
      </form>
      <button @click="memberJoin()">회원가입</button>
    </div>
  </template>
  
  <style scoped>
  .login-container {
    max-width: 500px;
    margin: 100px auto;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
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