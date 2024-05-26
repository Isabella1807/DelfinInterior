<script setup>
import {useStore} from "vuex"
import {computed} from "vue";
import Banner from "../components/shopComponents/Banner.vue"
import homeImage from "@/assets/images/homeImage.jpg";
import ProductList from "@/components/shopComponents/ProductList.vue";
import CategorySelector from "@/components/shopComponents/CategorySelector.vue";
import ShopHeader from "@/components/shopComponents/ShopHeader.vue";

const store = useStore();
const selectedCategory = computed(() => {
  return store.getters["products/getSelectedCategory"]
})
</script>

<template>
  <div class="globalContentWidth">
    <div class="shopContainer">
      <Banner :bannerImg="homeImage" :shopCategory="selectedCategory"/>
      <div class="shopContentContainer">
        <ShopHeader/>
        <div class="lowerShopContainer">
          <CategorySelector/>
          <ProductList/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.globalContentWidth {
  width: 100%;
}

.shopContentContainer {
  color: $fontColorBlack;

  .lowerShopContainer {
    display: flex;
    justify-content: center;
  }
}

/*@include md {
  .lowerShopContainer {
    justify-content: space-between;
  }
}*/
</style>