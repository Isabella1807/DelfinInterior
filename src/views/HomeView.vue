<script setup>
import HomeFurnitureCard from "@/components/HomeFurnitureCard.vue";
import diningchairPath from "@/assets/images/spisestol.jpg"
import tablePath from "@/assets/images/bord.jpg";
import armchairPath from "@/assets/images/lænestole2.jpg";
</script>

<template>
  <div class="homeFrontImageContainer">
    <img src="../assets/images/homeImage.jpg" alt="">
  </div>
  <div class="globalContentWidth">
    <HomeFurnitureCard to="/shop" :bgImgPath="diningchairPath" cardTitle="Spisestole"></HomeFurnitureCard>
    <HomeFurnitureCard to="/shop" :bgImgPath="tablePath" cardTitle="Borde"></HomeFurnitureCard>
    <HomeFurnitureCard to="/shop" :bgImgPath="armchairPath" cardTitle="Lænestole"></HomeFurnitureCard>
  </div>
</template>

<style scoped lang="scss">
.test{
  width: 100%;
  background-color: deeppink;

  @include md{
    background-color: blue;
  }
}
.homeFrontImageContainer{

  img{
    object-fit: cover;
    width: 100%;
    height: 60vh;

    @include md {
      height: 80vh;
    }
  }
}
</style>
