<script setup>
import { useCartStore } from '@/stores/cart.js';
import { computed } from 'vue';
const cartStore = useCartStore();

const cartItem = computed(() => {
  return cartStore.item.filter((v) => cartStore.cartItem.includes(v.id));
});

const allClear = () => {
  cartStore.cartItem = [];
};

const payCart = () => {

  const price = cartItem.value.reduce((prev, cur) => {
    return prev + cur.price;
  }, 0);
  alert(`총 ${price.toLocaleString()}원을 결제하시겠습니까?`);
};

const outCart = (id) => {

  cartStore.outCart(id);
};
</script>
<template>
  <h1>장바구니 목록</h1>
  <RouterLink to="/itemList">상품 목록</RouterLink>
  <ul v-if="cartItem.length > 0">
    <li v-for="item in cartItem">
      <span>{{ item.name }}</span> &nbsp;
      <span>{{ item.price }}원</span> &nbsp;
      <button @click="outCart(item.id)">삭제</button>
    </li>
  </ul>
  <p v-else>장바구니가 비어 있습니다.</p>
  <button @click="payCart">결제</button>
  <button @click="allClear">전체 비우기</button>
</template>