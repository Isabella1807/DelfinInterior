<script setup>
import {useStore} from "vuex"
import {computed, ref} from "vue";
import {useImageUpload} from "@/database/productImages.js";

const {handleFileUpload, imageUrl} = useImageUpload();

const store = useStore();
const cancelEditing = () => {
  store.dispatch('products/cancelEditingProduct');
}

const onSave = () => {
  product.value.mainImage = imageUrl;
  store.dispatch('products/saveProduct', product.value);
}

const existingProduct = computed(() => store.getters["products/getEditingProduct"])

const product = ref({
  title: existingProduct.value?.title ?? '',
  priceDKK: existingProduct.value?.priceDKK ?? null,
  weightKilo: existingProduct.value?.weightKilo ?? null,
  description: existingProduct.value?.description ?? '',
  material: existingProduct.value?.material ?? '',
  category: existingProduct.value?.category ?? '',
  mainImage: existingProduct.value?.mainImage ?? 'https://source.unsplash.com/random/200x200?sig=1',
  extraImages: existingProduct.value?.extraImages ?? [
    'https://source.unsplash.com/random/200x200?sig=23',
    'https://source.unsplash.com/random/200x200?sig=25',
    'https://source.unsplash.com/random/200x200?sig=26',
    'https://source.unsplash.com/random/200x200?sig=27',
  ],
  id: existingProduct.value?.id ?? null
})

const modalTitle = computed(() => {
  if (existingProduct.value) {
    return 'Rediger produkt'
  }

  return 'Tilføj nyt produkt'
})

</script>

<template>
  <div class="adminEditInfoOverlayContainer">
    <div class="globalContentWidth editContainerWrapper">
      <div class="AdminEditContainer">
        <form v-on:submit.prevent="">
          <p class="editOverlayHeader">{{ modalTitle }}</p>
          <div class="inputContainer">
            <label for="title">Produkt navn</label>
            <input class="inputToEdit" name="title" id="title" type="text" placeholder="produkt navn"
                   v-model="product.title">
          </div>
          <div class="inputContainer">
            <label for="price">Produkt pris</label>
            <input class="inputToEdit" name="price" id="price" type="number" placeholder="produkt pris"
                   v-model="product.priceDKK">
          </div>
          <div class="inputContainer">
            <label for="weight">Produkt vægt</label>
            <input class="inputToEdit" name="weight" id="weight" type="number" placeholder="produkt vægt"
                   v-model="product.weightKilo">
          </div>
          <div class="inputContainer">
            <label for="category">Produkt kategori</label>
            <input class="inputToEdit" name="category" id="category" type="text" placeholder="produkt kategori"
                   v-model="product.category">
          </div>
          <div class="inputContainer">
            <label for="material">Produkt materiale beskrivelse</label>
            <textarea class="inputToEdit" name="material" id="material" placeholder="produkt materiale beskrivelse"
                      v-model="product.material"/>
          </div>
          <div class="inputContainer">
            <label for="description">Produkt beskrivelse</label>
            <textarea class="inputToEdit" name="description" id="description" placeholder="produkt beskrivelsen"
                      v-model="product.description"/>
          </div>

          <label for="image">Upload billede</label>
          <div class="productImageContainer" :style="`background-image: url(${imageUrl})`">
            <input type="file" name="image" id="image" @change="handleFileUpload"/>
          </div>

          <div class="buttonsContainer">
            <div id="cancel" class="button" @click="cancelEditing">
              <p>Cancel</p>
            </div>
            <div id="save" class="button" @click="onSave">
              <p>Gem</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.adminEditInfoOverlayContainer {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9;
  padding: 10rem 0 3rem 0;
  background-color: rgba(#000000, 0.5);

  .editContainerWrapper {
    height: 100%;
    display: flex;
    justify-content: center;

    .AdminEditContainer {
      background-color: #FFFFFF;
      padding: 50px;
      max-height: 100%;
      overflow-y: auto;
      margin: auto;

      .editOverlayHeader {
        font-size: $fontSize24;
        margin-bottom: 20px;
        color: $fontColorBlack;
      }

      .inputContainer {
        width: 100%;
        margin-bottom: 20px;

        .inputToEdit {
          font-size: $fontSize14;
          border: 1px solid $fontColorBlack;
          padding: 10px;
          width: 100%;

          &:focus {
            outline: none;
            border: 1px solid $fontColorBlack;
            background-color: #ededed;
            color: black;

          }
        }
      }

      .productImageContainer {
        background-size: cover;
        background-position: center center;
        border: 1px solid $fontColorBlack;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        max-width: 280px;
        height: 350px;

      }

      .buttonsContainer {
        display: flex;
        justify-content: space-between;

        #save {
          background-color: #a4b2a1;
          color: white;
          border: #a4b2a1;

          &:hover {
            background-color: #738272;
          }
        }

        .button {
          border: 1px solid $fontColorBlack;
          padding: 10px 40px;

          &:hover {
            background-color: dimgray;
            color: white;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>