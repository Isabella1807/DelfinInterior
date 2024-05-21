<script setup>
const props = defineProps({
  bannerImg: String,
  shopCategory: String,
})
</script>

<template>
  <div class="bannerContainer">
    <div class="bannerImageContainer">
      <img :src="props.bannerImg" alt="Banner billede til shoppen">
    </div>
    <h1>{{ props.shopCategory }}</h1>
  </div>
</template>

<style scoped lang="scss">
.bannerContainer {
  position: relative;
  margin: 5rem 0 ;

  .bannerImageContainer{
    height: 200px;

    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: $FontSize30;
    color: $fontColorWhite;
  }
}
</style>