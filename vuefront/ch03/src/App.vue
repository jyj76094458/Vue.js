<script>
export default {
  // data() {
  //   return {
      // name: '철수',
      // age: 19,
      // message: '<h1>Hello, Vue JS!</h1>',
      // message: 'Hello, Vue JS',
      // className: 'red-color',
      // id: 'title',
      // class: 'red-color',
      // visible: true,
      // unvisible: false,
      // condition: 'A',
      // condition: true,
      // fruits: ['apple', 'banana', 'orange'],
      // user: {
      //   name: 'John',
      //   age: 20,
      //   gender: 'male',
      // },
  //   };
  // },
  // methods: {
  //   clickHandler() { // ES6의 단축 메서드명으로 표기
  //   alert('click!');
  //   },
  // },
  // methods: {
  //   clickHandler(event){
  //   console.log(event);
  //   },
  // },
  // methods: {
    // clickHandler(message){
    // console.log(event); // event 객체를 사용할 수 없음
    // },
    // clickHandler(event, message) {
    //   console.log(event);
    // }
    // onKeyupHandler(e) {
    //   if (e.keyCode === 13) { // 키보드 이벤트 객체에서 keyCode 속성 13은 Enter 키
    //     console.log('Enter!');
    //   }
    // },
  //   onKeyupHandler() {
  //     console.log('Enter!');
  //   },
  // },
  data() {
    return {
      // number: 0,
      // name: '철수',
      // gender: '남자',
      // age: 20,
      // uid: '',
      // uid: 'sucoding',
      // upw: '',
      message: '',
    };
  },
  methods: {
    // increasement() {
    //   this.number++;
    // },
    // login() {
    //   console.log(`id: ${this.uid}`);
    //   console.log(`pw: ${this.upw}`);
    // },
    printData() {
      console.log(`id: ${this.message}`);
    },
  },
}
</script>
<template>
  <!-- <p>내 이름은 {{ name }}입니다.</p> -->
  <!-- <p>나이는 {{ age }}살입니다.</p> -->
  <!-- {{ 10 * 20 * 30 }} -->
  <!-- {{ name.toUpperCase() }} -->
  <!-- {{ message }} -->
  <!-- <div v-html="message"></div> -->
  <!-- <div v-text="message"></div> -->
  <!-- <div v-pre>{{ message }}</div> -->
  <!-- <h1 v-bind:class="className">안녕하세요</h1> -->
  <!-- <h1 v-bind:class="className">Hello, Vue JS</h1> -->
  <!-- <h1 :class="className">Hello, Vue JS</h1> ---------- 축약형 -->
  <!-- <h1 id="title" class="red-color">Hello, Vue JS</h1> -->
  <!-- <h1 :id="id" :class="class">Hello, Vue JS</h1>
  <h1 :id :class>Hello, Vue JS</h1> -------- 값 단축 -->
  <!-- <p v-if="visible">이 요소는 렌더링됩니다.</p> -->
  <!-- <p v-if="unvisible">이 요소는 렌더링되지 않습니다.</p> -->
  <!-- <p v-if="condition === 'A'">condition 데이터의 값은 A입니다.</p>
  <p v-else-if="condition === 'B'">condition 데이터의 값은 B입니다.</p>
  <p v-else-if="condition === 'C'">condition 데이터의 값은 C입니다.</p>
  <p v-else-if="condition === 'D'">condition 데이터의 값은 D입니다.</p>
  <p v-else>어떤 조건에도 해당하지 않습니다.</p> -->
  <!-- <p v-show="condition">v-show 디렉티브는 조건이 참입니다.</p>
  <p v-show="!condition">v-show 디렉티브는 조건이 거짓입니다.</p> -->
  <!-- <h1>fruits 데이터의 반복 결과</h1>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      인덱스: {{ index }}, 값: {{  fruit }}
    </li>
  </ul> -->
  <!-- <h1>user 데이터의 반복 결과</h1>
  <ul>
    <li v-for="(value, key, index) in user" :key="index">
      {{ index }}: {{ key }} : {{ value }}
    </li>
  </ul> -->
  <!-- <button type="button" v-on:click="clickHandler">클릭</button> -->
  <!-- <button type="button" v-on:dblclick="clickHandler">클릭</button> -->
  <!-- <button type="button" @dblclick="clickHandler">클릭</button> -->
  <!-- <button type="button" @click="clickHandler($event)">클릭</button> -->
  <!-- <button type="button" @click="($event) => clickHandler($event)">클릭</button> -->
  <!-- <button type="button" @click="clickHandler('Hello')">클릭</button> -->
  <!-- <button type="button" @click="clickHandler($event, 'Hello')">클릭</button> -->
  <!-- <input type="text" @keyup="($event) => onKeyupHandler($event)" /> -->
  <!-- <input type="text" @keyup.enter="onKeyupHandler" /> -->
  <!-- <h1>{{  number }}</h1>
  <button type="button" @click="increasement">증가</button> -->
  <!-- <h1 v-once>{{ number }}</h1>
  <button type="button" @click="increasement">증가</button> -->
  <!-- <div v-memo="[name, gender]">
    <p>이름: {{ name }}</p>
    <p>성별: {{ gender }}</p>
    <p>나이: {{ age }}</p>
  </div>
  <button @click="name = '영희'">이름 변경</button>
  <button @click="gender = '여자'">성별 변경</button>
  <button @click="age = 30">나이 변경</button> -->
  <!-- <form id="loginForm">
    <label for="uid">아이디: <input type="text" id="uid" v-model="uid" /></label>
    <label for="upw">비밀번호: <input type="password" id="upw" v-model="upw" /></label>
    <button type="button" @click="login">로그인</button>
  </form> -->
  <form id="loginForm">
    <textarea v-model="message"></textarea>
    <button type="button" @click="printData">데이터 출력</button>
  </form>
</template>
<style>
.red-color {
  color: red;
}
</style>