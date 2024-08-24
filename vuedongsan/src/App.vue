<template>

  <div v-if="1 == 2">
    안녕하세요
  </div>
  <div v-else-if="1 == 3">
    안녕하세요2
  </div>

  <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>

  <div class="menu">
    <a v-for="a in 메뉴들" :key="a">{{a}}</a>
  </div>

  <Discount :오브젝트="오브젝트" />


  <Card :원룸="원룸들[i]" v-for="(작명,i) in 원룸들" :key="작명"/>

  <!-- <Card :원룸="원룸들[1]" />
  <Card :원룸="원룸들[2]"/>
  <Card :원룸="원룸들[3]"/>
  <Card :원룸="원룸들[4]"/>
  <Card :원룸="원룸들[5]"/> -->


  <!-- <div v-for="(a,i) in 원룸들" :key="i">
    <img :src="a.image" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{a.title}}</h4>
    <p>{{a.price}}원</p>
  </div> -->

</template>

<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  data(){
    return {
      오브젝트 : { name : 'kim', age : 20 },
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods: {
    increase(){
      this.신고수 += 1
    }
  },

  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  }
}
</script>

<style>
body {
  margin : 0
}
div {
  box-sizing: border-box;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

</style>