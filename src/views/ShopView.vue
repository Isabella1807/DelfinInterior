<script setup>
import Banner from "../components/shopComponents/Banner.vue"
import homeImage from "@/assets/images/homeImage.jpg";
</script>

<template>
  <div class="globalContentWidth">
    <div class="shopContainer">
      <Banner :bannerImg="homeImage" shopCategory="Alle produkter"/>
      <div class="shopContentContainer">
        <p>Min shop whoop</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.globalContentWidth {
  width: 100%;
}

.shopContentContainer{
  background-color: deeppink;
}
</style>