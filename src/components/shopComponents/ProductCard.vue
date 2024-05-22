<script setup>
const props = defineProps({
  imgPath: String,
})
</script>

<template>
  <div class="productCardContainer">
    <router-link to="/product">
      <div class="productImageContainer">
        <img :src="props.imgPath" alt="" class="productImage">
      </div>
    </router-link>

    <div class="productTextContainer">
      <p>Fritz Hansen cirkulær Cafébord sort Laminat</p>
      <div class="lowerTextContainerItems">
        <p>30.000 DKK</p>
        <router-link to="/product">
          <div class="productReadMore">
            <p>Læs mere</p>
          </div>
        </router-link>
      </div>
    </div>


  </div>
</template>

<style scoped lang="scss">
.productCardContainer {
  background-color: #FFFFFF;
  /*  border: 1px solid green;*/

  .productImageContainer {
    aspect-ratio: 4/5;
    &:hover {
      cursor: pointer;
    }

    .productImage {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .productTextContainer {
    padding: 0.5rem;
    font-size: $fontSize20;

    .lowerTextContainerItems {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;

      .productReadMore{
        &:hover{
          cursor:pointer;

          p{
            font-style: italic;
          }
        }
      }
    }
  }
}
</style>