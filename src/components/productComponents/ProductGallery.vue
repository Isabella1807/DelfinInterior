<script setup>

</script>

<template>
  <div class="productGallery">
    <div class="productFirstImage">
      <img src="@/assets/images/lænestol3.jpg" alt="">
    </div>
    <div class="galleryOptions">
      <div class="galleryOptionImage"><img src="@/assets/images/lænestol31.jpg" alt=""></div>
      <div class="galleryOptionImage"><img src="@/assets/images/lænestol32.jpg" alt=""></div>
      <div class="galleryOptionImage"><img src="@/assets/images/lænestol31.jpg" alt=""></div>
      <div class="galleryOptionImage"><img src="@/assets/images/lænestol32.jpg" alt=""></div>
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