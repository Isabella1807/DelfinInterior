<script setup>
import IconsTemplate from "@/components/productComponents/IconsTemplate.vue";
import route from "@/assets/icons/routeIcon.png";
import truck from "@/assets/icons/truckIcon.png";
import smile from "@/assets/icons/smileIcon.png";
</script>



<template>
  <div class="infoIconsContainer">
    <IconsTemplate :imgPath="route" iconText="Levering i hele Danmark" iconAlt="levering i hele Danmark"></IconsTemplate>
    <IconsTemplate :imgPath="truck" iconText="Gratis levering" iconAlt="Gratis levering"></IconsTemplate>
    <IconsTemplate :imgPath="smile" iconText="Tilfredsheds-garanti" iconAlt="Tilfredsheds-garanti"></IconsTemplate>
  </div>
</template>

<style scoped lang="scss">
.infoIconsContainer{
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 2rem 0 0 0;
}
</style>