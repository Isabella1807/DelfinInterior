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
        <router-link to="/product">
          <button type="button">
            Min super seje stol omg
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.globalContentWidth {
  width: 100%;
}

.shopContentContainer {
  background-color: deeppink;
}
</style>