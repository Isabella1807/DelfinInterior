<script setup>
const props = defineProps({
  description: String,
  productWeight: Number,
  material: String,
})
</script>

<template>
  <div class="textContainer">
    <div class="descriptionContainer">
      <p class="descriptionItem">{{props.description}}</p>
      <p class="descriptionItem">{{props.material}}</p>
      <p class="descriptionItem">Vægt: {{ props.productWeight }} kg </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.textContainer {
  color: $fontColorBlack;
}

.descriptionContainer {
  margin: 1rem 0;

  .descriptionItem {
    margin: 1rem 0;
    line-height: 1.5;
  }
}


@include md {

}
</style>