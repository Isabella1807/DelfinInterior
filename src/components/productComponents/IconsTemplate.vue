<script setup>
const props = defineProps({
  imgPath: String,
  iconText: String,
  iconAlt: String,
})
</script>

<template>
  <div class="productIconContainer">
    <img :src="props.imgPath" alt="props.iconAlt">
    <p class="iconText">{{props.iconText}}</p>
  </div>
</template>

<style scoped lang="scss">
.productIconContainer{
  max-width: 100px;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  .iconText{
    color: $fontColorBlack;
  }

  .p {
    text-wrap: normal;
  }
}
</style>