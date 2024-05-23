<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore();

const categories = computed(() => store.getters["products/getAllCategories"])

const props = defineProps({
  imgPath: String,
  price: Number,
  title: String,
  id: Number,
})

const formattedPrice = computed(() => {
  return `${props.price} DKK`
})
</script>

<template>
  <div class="productCardContainer">
    <router-link :to="`/product/${props.id}`">
      <div class="productImageContainer">
        <img :src="props.imgPath" alt="" class="productImage">
      </div>
    </router-link>

    <div class="productTextContainer">
      <p>{{ props.title }}</p>
      <div class="lowerTextContainerItems">
        <p>{{ formattedPrice }}</p>
        <router-link :to="`/product/${props.id}`">
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
  display: flex;
  flex-direction: column;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

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