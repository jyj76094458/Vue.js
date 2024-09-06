<script setup>
import { useCartStore } from '@/stores/cart.js';
import { storeToRefs } from 'pinia';
const cartStore = useCartStore();

const { item } = storeToRefs(cartStore);

const inCart = (id) => {
  cartStore.cartItem.push(id);
};
const outCart = (id) => {
  cartStore.outCart(id);
};
</script>

<template>
  <h1>상품 목록</h1>
  <RouterLink to="/cart">장바구니</RouterLink>
  <ul>
    <li
    v-for="goods in item"
    :key="goods.id" :class="{ in: cartStore.cartItem.includes(goods.id) }">
    <span>{{ goods.name }}</span> &nbsp;
    <span>{{ goods.price }}원</span> &nbsp;
    <button v-if="!cartStore.cartItem.includes(goods.id)" @click="inCart(goods.id)">
      담기</button>
    <button v-else @click="outCart(goods.id)">삭제</button>
    </li>
  </ul>
</template>
<style scoped>
.in {
  text-decoration: line-through;
}
</style>