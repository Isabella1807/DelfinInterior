<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import editOverlay from "./components/ProductModal.vue";
import {useProductStore} from "@/store/modules/productStore";
import {computed, ComputedRef, onMounted} from "vue";

const store = useProductStore();

const isEditingProductState: ComputedRef<boolean> = computed(() => store.isEditingProduct)

onMounted(() => {
  store.loadAllProducts();
})

</script>

<template>
  <TheHeader/>
  <main>
    <editOverlay v-if="isEditingProductState"/>
    <RouterView/>
  </main>
  <TheFooter/>
</template>

<style scoped lang="scss">

</style>
