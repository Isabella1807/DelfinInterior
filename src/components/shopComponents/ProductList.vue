<script setup>
import ProductCard from "@/components/shopComponents/ProductCard.vue";
import loungechair from "@/assets/images/lænestol3.jpg";
import stol from "@/assets/images/spisestol.jpg";
import bord from "@/assets/images/bord.jpg";
</script>

<template>
  <div class="productsContainer">
    <ProductCard :imgPath="stol"></ProductCard>
    <ProductCard :imgPath="bord"></ProductCard>
    <ProductCard :imgPath="loungechair"></ProductCard>
    <ProductCard :imgPath="stol"></ProductCard>
    <ProductCard :imgPath="loungechair"></ProductCard>
    <ProductCard :imgPath="bord"></ProductCard>
  </div>
</template>

<style scoped lang="scss">
.productsContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@include md {
  .productsContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
</style>