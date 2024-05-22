<script setup>

</script>

<template>
  <div class="addToBasketButtonContainer">
    <div class="addToBasketButton">
      <p class="addToBasketText">Tilføj til kurv</p>
    </div>
    <p class="deliveryTimeText">
      Leveringstid: 1-2 dage
    </p>
  </div>
</template>

<style scoped lang="scss">
.addToBasketButtonContainer{
  margin: 2rem 0;
  .addToBasketButton{
    background-color: #A4B2A1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18.7rem;
    height: 3.1rem;

    &:hover {
      cursor: pointer;
      background-color: #738272;
    }

    .addToBasketText{
      color: $fontColorWhite;

    }
  }

  .deliveryTimeText{
    font-style: italic;
    color: $fontColorBlack;
    margin-top: 0.5rem;
  }
}
</style>