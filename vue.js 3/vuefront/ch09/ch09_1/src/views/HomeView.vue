<script>
import { mapState, mapActions } from 'pinia';
import { useCountOptionStore } from '@/stores/countOption';
import { useCountSetupStore } from '@/stores/countSetup';
export default {
  computed: {
    // this.num, this.doubleNum에 등록됨
    ...mapState(useCountOptionStore, ['num', 'doubleNum']),
    ...mapState(useCountSetupStore, {
      myNum: 'num', // this.myNum에 등록됨
      myDouble: 'doubleNum',  // this.myDouble에 등록됨
    }),
  },
  methods: {
    // this.increment(), this.getJson()에 등록됨
    ...mapActions(useCountOptionStore, ['increment', 'getJSON']),
    ...mapActions(useCountSetupStore, {
      myIncre: 'increment', // this.myIncre()에 등록됨
      myJSON: 'getJSON',  // this.myJSON()에 등록됨
    }),
  },
}
</script>
<template>
  <h1>Home View</h1>
  <h2>num: {{ num }}</h2> <!-- 또는 {{ myNum }}-->
  <h2>doubleNum: {{  doubleNum }}</h2> <!-- 또는 {{ myDouble }}-->
  <button @click="increment">increment</button>
  <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">
    getJSON</button>
</template>