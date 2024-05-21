<script setup>

const props = defineProps({
  bgImgPath: String,
  cardTitle: String,
  to: String,
});

</script>

<template>
  <router-link :to="props.to">
    <div class="furnitureCardContainer">
      <img :src="bgImgPath" alt="spisestol">
      <h1 class="cardTitle">{{ cardTitle }}</h1>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.furnitureCardContainer {
  margin: 4rem auto;
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 600ms;
    position: relative;
    top: 0;
    left: 0;
  }

  h1 {
    font-size: $FontSize30;
    color: $fontColorWhite;
  }

  .cardTitle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    cursor: pointer;

    img {
      height: 106%;
      width: 106%;
      top: -3%;
      left: -3%;
    }
  }

  @include md {
    margin: 4rem auto;
    width: 75%;
  }

  /*@include md {
    .furnitureCardContainer {
      border: 4px solid green;
      width: 61rem;
      height: 31rem;
      background-color: orange;
    }
  }*/
}
</style>