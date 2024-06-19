<script setup lang="ts">
import ProductCard from "@/components/shopComponents/ProductCard.vue";
import {useUserStore} from "@/store/modules/userStore";
import {useProductStore} from "@/store/modules/productStore";
import {computed} from "vue";

const userStore = useUserStore();
const productStore = useProductStore();

const products = computed(() => productStore.getAllProductInCategory);
const isUserAdmin = computed(() => userStore.isAdmin);

const openAddNewProduct = () => {
  //Null for at redigere i et produkt der ikk findes i forvejen.
  productStore.startEditingProduct(null);
}
</script>

<template>
  <div class="productsContainer">
    <div class="adminAddNewProductContainer" v-if="isUserAdmin" @click="openAddNewProduct">
      <div class="addNewProductHelper">
        <div class="addNewProductImage">
          <img src="@/assets/icons/add.png" alt="tilføj nyt produkt">
        </div>
        <p>Tilføj nyt produkt</p>
      </div>
    </div>
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :imgPath="product.mainImage"
        :price="product.priceDKK"
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

  .adminAddNewProductContainer {
    border: 1px solid $fontColorBlack;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      cursor: pointer;
    }
    .addNewProductHelper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
  }
}

@include md {
  .productsContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
</style>