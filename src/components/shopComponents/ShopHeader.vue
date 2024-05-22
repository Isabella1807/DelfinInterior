<script setup>

</script>

<template>
  <div class="shopHeaderOptions">
    <div class="mobileCategory">
      <p>Kategorier:</p>
      <img src="" alt="">
    </div>
    <div>
      <p>Sorter efter:</p>
      <img src="" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.shopHeaderOptions {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #707070;
  margin-bottom: 2rem;
  font-size: $fontSize20;

  .mobileCategory {
    display: block;
  }
}

@include md {
  .shopHeaderOptions {
    justify-content: end;

    .mobileCategory {
      display: none;
    }
  }
}
</style>