<script setup lang="ts">
import RecommendedList from "./RecommendedList.vue";
import Product from "./Product.vue";
</script>

<template>
  <main class="main container">
    <Product />
    <RecommendedList />
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
