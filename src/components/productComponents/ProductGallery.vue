<script setup>
const props = defineProps({
  mainImage: String,
  extraImages: Array,
})
</script>

<template>
  <div class="productGallery">
    <div class="productFirstImage">
      <img :src="props.mainImage" alt="Kæmpe billede af produkt">
    </div>
    <div class="galleryOptions">
      <div class="galleryOptionImage" v-for="image in props.extraImages">
        <img :src="image" alt="Mindre billede af produkt">
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.productGallery {
  flex: 1;
}

.productFirstImage {
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.galleryOptions {
  display: flex;
  width: 100%;

  .galleryOptionImage {
    flex: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>