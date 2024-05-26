<script setup>
import {useStore} from "vuex"
import {computed, ref} from "vue";

const store = useStore();
const cancelEditing = () => {
  store.dispatch('products/cancelEditingProduct');
}

const onSave = () => {
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

</script>

<template>
  <div class="adminEditInfoOverlayContainer">
    <div class="globalContentWidth">
      <div class="AdminEditContainer">
        <p class="editOverlayHeader">Rediger produkt</p>
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
        <div class="buttonsContainer">
          <div id="cancel" class="button" @click="cancelEditing">
            <p>Cancel</p>
          </div>
          <div id="save" class="button" @click="onSave">
            <p>Gem</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.adminEditInfoOverlayContainer {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9;
  background-color: rgba(#000000, 0.5);

  .AdminEditContainer {
    background-color: #FFFFFF;
    padding: 50px;

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
</style>