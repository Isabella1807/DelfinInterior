<script setup>
import ProductCard from "@/components/shopComponents/ProductCard.vue";
import {useStore} from 'vuex';
import {computed} from "vue";

const store = useStore();

const products = computed(() => store.getters["products/getAllProductsInCategory"])
</script>

<template>
  <div class="productsContainer">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
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
  width: 100%;
}

@include md {
  .productsContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
</style>