<script setup>
import ProductCard from "@/components/shopComponents/ProductCard.vue";
import loungechair from "@/assets/images/lænestol3.jpg";
import stol from "@/assets/images/spisestol.jpg";
import bord from "@/assets/images/bord.jpg";
import {useStore} from 'vuex';
import {computed} from "vue";

const store = useStore();

const products = computed(() => store.getters["products/getAllProducts"])
</script>

<template>
  <div class="productsContainer">
    <ProductCard
        v-for="product in products"
        :imgPath="product.images.main"
        :price="product.price_dkk"
        :title="product.title"
    />
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