<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import { useRouter } from 'vue-router'
import ProductGallery from "@/components/productComponents/ProductGallery.vue";
import ProductTitle from "@/components/productComponents/ProductTitle.vue";
import ProductDescription from "@/components/productComponents/ProductDescription.vue";
import ProductIcons from "@/components/productComponents/ProductIcons.vue";
import ProductAddToBasket from "@/components/productComponents/ProductAddToBasket.vue";

const store = useStore();
const router = useRouter()

const product = computed(() => {
  return store.getters["products/getProductById"](productId.value)
})

const productId = computed (() => {
  return router.currentRoute.value.params.id
});

</script>

<template>
  <div class="globalContentWidth">
    <div class="productContainer" v-if="product">
      <ProductGallery class="ProductGallery" :mainImage="product.mainImage" :extraImages="product.extraImages"/>
      <div class="informationContainer">
        <ProductTitle class="ProductTitle" :title="product.title" :price="product.priceDKK" :id="productId"/>
        <ProductDescription class="ProductDescription" :description="product.description" :productWeight="product.weightKilo" :material="product.material"/>
        <ProductIcons class="ProductIcons"/>
        <ProductAddToBasket class="ProductAddToBasket"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.ProductGallery {
  grid-area: area1;
}

.informationContainer {
  grid-area: area2;
}


.ProductTitle {
  grid-area: area2;
}

.ProductDescription {
  grid-area: area3;
}

.ProductIcons {
  grid-area: area4;
}

.ProductAddToBasket {
  grid-area: area5;
}

.productContainer {
  width: 100%;
  display: grid;
  gap: 2rem;
  margin: 5rem 0;
  grid-template-areas:
      "area1"
      "area2"
}

.informationContainer {
  flex: 1;
  display: grid;
  grid-template-areas:
      "area2"
      "area4"
      "area5"
      "area3";
}

@include md {
  .productContainer {
    width: 100%;
    gap: 4rem;
    margin: 5rem 0;
    grid-template-areas:
      "area1 area2"
      "area1 area2"
      "area1 area2"
      "area1 area2";
    grid-template-columns: 1fr 2fr;
  }

  .informationContainer {
    flex: 1;
    grid-template-areas:
      "area2"
      "area3"
      "area4"
      "area5";
  }
}
</style>