<script setup>

</script>

<template>
  <div class="categoriesContainer">
    <div class="categoryTitle">
      <p>Kategorier</p>
    </div>
    <p>Lænestole</p>
    <p>spisebordsstolffdfdffddfetesttesttesttesttesttesttesttesttesttesttesttest</p>
    <p>Borde</p>
  </div>
</template>

<style scoped lang="scss">
.categoriesContainer {
  margin-right: 2rem;
  font-size: $fontSize20;
  line-height: 2rem;
  display: none;

  .categoryTitle {
    border-bottom: 1px solid #707070;
    line-height: 2rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }
}

@include md {
  .categoriesContainer {
    display: block;
    max-width: 12rem;
    overflow: hidden;
    .categoryTitle {
    }
  }
}
</style>