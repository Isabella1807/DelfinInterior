<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import editOverlay from "./components/ProductModal.vue";
import {useStore} from "vuex";
import {useProductStore} from "@/store/modules/productStore";
import {computed, onMounted} from "vue";
import {useRouter} from "vue-router";

const store = useStore();
const store2 = useProductStore();
const router = useRouter();

const isEditingProductState = computed(() => store.getters["products/getIsEditingProduct"])

onMounted(() => {
  store2.loadAllProducts();
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
