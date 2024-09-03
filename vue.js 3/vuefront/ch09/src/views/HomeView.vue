<script>
import { mapState } from 'pinia';
import { useCountOptionStore } from '@/stores/countOption';
import { useCountSetupStore } from '@/stores/countSetup';
export default {
  computed: {
    // this.num, this.doubleNum에 등록됨
    ...mapState(useCountOptionStore, ['num', 'doubleNum']),
    ...mapState(useCountSetupStore, {
      myNum: 'num',
      myDouble: 'doubleNum',
    }),
  },
}
</script>
<template>
  <h1>Home View</h1>
  <h2>num: {{ num }}</h2> <!-- 또는 {{ myNum }}-->
  <h2>doubleNum: {{  doubleNum }}</h2> <!-- 또는 {{ myDouble }}-->
</template>