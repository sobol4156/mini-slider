<script setup lang="ts">
import RecommendedList from "./RecommendedList.vue";
import Product from "./Product.vue";
import { ref, onMounted } from 'vue';
import { fetchProducts, fetchRecommend } from '../api';

const products = ref([]);
const recommend = ref([])

onMounted(async () => {
  try {
    const response = await fetchProducts();
    console.log(response)
    products.value = response;
  } catch (error) {
    console.error(error);
  }
});
onMounted(async () => {
  try {
    const response = await fetchRecommend();
    console.log(response)
    recommend.value = response;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <main class="main container">
    <Product v-if="products.length > 0" :products="products"/>
    <RecommendedList v-if="recommend.length > 0" :recommends="recommend"/>
  </main>
</template>

<style scoped>
.main {
  padding: 32px 10px;
}
@media (width<1440px) {
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
