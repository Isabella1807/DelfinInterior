<script setup>
const props = defineProps({
  title: String,
  price: Number,
})
</script>

<template>
  <div class="productImportnantInfoContainer">
    <p class="productInfo">{{ props.title }}</p>
    <p class="productInfo">{{ props.price}}DKK</p>
  </div>
</template>

<style scoped lang="scss">
.productImportnantInfoContainer {
  border-bottom: 1px solid $fontColorBlack;
  color: $fontColorBlack;

  .productInfo {
    font-size: $fontSize24;
    margin-bottom: 1rem;
  }
}
</style>