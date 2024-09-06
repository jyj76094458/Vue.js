<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { memberJoin } from '@/api/users';
import axios from 'axios';

const id = ref('');
const password = ref('');
const name = ref('');
const address = ref('');
const phoneNumber = ref('');
const residentRegistrationNumber = ref('');

const memberJoinSubmit = async () => {
  if (id.value && password.value && name.value && address.value && phoneNumber.value && residentRegistrationNumber.value) {
        alert(`회원가입 신청 완료`);
    } else {
        alert(`회원가입 항목을 모두 입력해주세요.`);
    }
  try {
    const response = await memberJoin({
      id: id.value,
      password: password.value,
      name: name.value,
      address: address.value,
      phoneNumber: phoneNumber.value,
      residentRegistrationNumber: residentRegistrationNumber.value
    });
    console.log('success:', response.data);
    router.push('/memberJoinSuccess');
  } catch (error) {
    console.error('Error:', error);
  }
};

const router = useRouter();

function goBackLogin(){
    router.push('/');
}

</script>

<template>
    <div class="login-container">
      <h2>회원가입</h2>
      <form @submit.prevent="memberJoinSubmit">
        <div class="input-group">
          <label for="id">아이디</label>
          <input v-model="id" type="text" id="id" placeholder="아이디를 입력하세요" />
        </div>
        <div class="input-group">
          <label for="password">비밀번호</label>
          <input v-model="password" type="password" id="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <div class="input-group">
          <label for="name">이름</label>
          <input v-model="name" type="text" id="name" placeholder="이름을 입력하세요" />
        </div>
        <div class="input-group">
          <label for="address">주소</label>
          <input v-model="address" type="text" id="address" placeholder="주소를 입력하세요" />
        </div>
        <div class="input-group">
          <label for="phoneNumber">연락처</label>
          <input v-model="phoneNumber" type="text" id="phoneNumber" placeholder="연락처를 입력하세요" />
        </div>
        <div class="input-group">
          <label for="residentRegistrationNumber">주민등록번호</label>
          <input v-model="residentRegistrationNumber" type="text" id="residentRegistrationNumber" placeholder="주민등록번호 앞(6자리) 뒤(1자리) 입력" />
        </div>
          <button type="submit">회원가입 신청</button>
      </form>
        <button @click="goBackLogin()">로그인으로 돌아가기</button>
    </div>
  </template>
  
  <style scoped>
  .login-container {
    max-width: 400px;
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