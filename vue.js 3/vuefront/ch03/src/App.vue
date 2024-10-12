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
      // message: '',
      // fruits: true, // true(체크), false(미체크)
      // fruits: ['banana', 'orange'],
      // gender: 'male',
      //  selectItem: 'cafeLatte', // value 속성의 값이 cafeLatte인 option 태그 선택

      // message: '',

      // selected: 'banana',
      // price: 500,

      // firstName: 'Gildong',
      // lastName: 'Hong',

      // numArr: [1, 2, 3, 4, 5],

      // inputStr: '',

      // arr: [0, 1, 2],
      // obj: { name: "chulsu" },

      primaryColor: 'red',
      primaryStyle: 'italic',
    };
  },
  computed: {
    // fullName() {
    //   console.log('computed fullname');
    //   return `${this.lastName} ${this.firstName}`;
    // },

    evenSum() {
      return this.numArr
      .filter((v) => v % 2 === 0)
      .reduce((acc, cur) => acc + cur, 0);
    },
  },
  watch: {
    // inputStr(newValue, oldValue) {
    //   console.log(`old value : ${oldValue}`);
    //   console.log(`new value : ${newValue}`);
    // },

    // arr(newValue, oldValue) {
    //   console.log(`old value : ${oldValue}`);
    //   console.log(`new value : ${newValue}`);
    // },
    // obj(newValue, oldValue) {
    //   console.log(`old value : ${JSON.stringify(oldValue)}`);
    //   console.log(`new value : ${JSON.stringify(newValue)}`);
    // },

    arr: {
      handler(newValue, oldValue) {
        console.log(`old value : ${oldValue}`);
        console.log(`new value : ${newValue}`);
      },
      deep: true,
    },
    obj: {
      handler(newValue, oldValue) {
        console.log(`old value : ${JSON.stringify(oldValue)}`);
        console.log(`new value : ${JSON.stringify(newValue)}`);
      },
      deep: true,
    },
  },
  methods: {
    // increasement() {
    //   this.number++;
    // },
    // login() {
    //   console.log(`id: ${this.uid}`);
    //   console.log(`pw: ${this.upw}`);
    // },

    // printData() {
    //   console.log(`id: ${this.message}`);
    // },

    // printData() {
    //   console.log(this.fruits); // 선택된 입력 요소의 value 속성 값 출력
    // },

    // printData() {
    //   console.log(this.gender); // 선택된 입력 요소의 value 속성 값 출력
    // },

    // printData() {
    //   console.log(this.selectItem);
    // },

    // onChangeHandler($event) {
    //   this.message = $event.target.value;
    // },

    // onChangeHandler($event) {
    //   if (this.selected === 'banana') {
    //     this.price = 500;
    //   }
    //   if (this.selected === 'apple') {
    //     this.price = 700;
    //   }
    // },

    // onSubmitHandler(e) {
    //   e.preventDefault();
    //   // 별도의 폼 전송 처리
    //   console.log('onSubmit Handler!');
    // },

    onKeyupHandler() {
      console.log(`keyup event!`);
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

  <!-- <form id="loginForm">
    <textarea v-model="message"></textarea>
    <button type="button" @click="printData">데이터 출력</button>
  </form> -->

  <!-- <form id="loginForm">
    <label for="banana">
      <input type="checkbox" id="banana" v-model="fruits" value="banana" />banana
    </label>
  </form> -->

  <!-- <form id="loginForm">
    <label for="banana">
      <input type="checkbox" id="banana" v-model="fruits" value="banana" />banana
    </label>
    <label for="orange">
      <input type="checkbox" id="orange" v-model="fruits" value="orange" />orange
    </label>
    <label for="apple">
      <input type="checkbox" id="apple" v-model="fruits" value="apple" />apple
    </label>
    <button type="button" @click="printData">확인</button>
  </form> -->

  <!-- <form id="loginForm">
    <label for="male">
      <input type="radio" id="male" name="gender" v-model="gender" value="male" />male
    </label>
    <label for="female">
      <input type="radio" id="female" name="gender" v-model="gender" value="female" />female
    </label>
    <button type="button" @click="printData">확인</button>
  </form> -->

  <!-- <form id="loginForm">
    <select v-model="selectItem">
      <option value="americano">아메리카노</option>
      <option value="espresso">에스프레소</option>
      <option value="cafeLatte">카페라떼</option>
    </select>
    <button type="button" @click="printData">확인</button>
  </form> -->

  <!-- <input type="text" v-model="message" />
  {{  message }} -->

  <!-- <input type="text" @input="onChangeHandler($event)" />
  {{ message }} -->
  
  <!-- <select v-model="selected" @change="onChangeHandler">
    <option value="banana">바나나</option>
    <option value="apple">사과</option>
  </select>
  가격: {{ price }}원 -->

  <!-- <form @submit="onSubmitHandler">
    <button type="submit">전송</button>
  </form> -->

  <!-- <input type="text" @keyup="onKeyupHandler" /> -->

  <!-- <h1>{{ lastName }} {{ firstName }}</h1>
  <h1>{{ lastName }} {{ firstName }}</h1> -->

  <!-- <h1>{{ fullName }}</h1>
  <h1>{{ fullName }}</h1> -->

  <!-- <h1>{{ numArr.filter((v) => v % 2 === 0).reduce((acc, cur) => acc + cur, 0) }}</h1> -->

  <!-- <h1>{{ evenSum }}</h1> -->

  <!-- <input type="text" v-model="inputStr" /> -->

  <!-- <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>
  <button @click="arr.push(3)">배열 변경</button>
  <button @click="obj.age = 20">객체 변경</button> -->

  <!-- <h1 style="color: red; font-style: italic">Inline Style</h1> -->

  <!-- <h1 :style="{ color: primaryColor, fontStyle: primaryStyle }">Inline Style</h1> -->

  <!-- <h1>Internal Style</h1> -->

  <h1>External Style</h1>

</template>
<style>
/* .red-color {
  color: red;
} */

/* h1 {
  color: red;
  font-style: italic;
} */

 /* @import './assets/main.css'; */

@import '~/main.css';

</style>