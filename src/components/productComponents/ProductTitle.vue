<script setup>
import {useStore} from "vuex"
import {useUserStore} from "@/store/modules/userStore";
import {computed} from "vue"

const store = useStore();
const store2 = useUserStore();

const isUserAdmin = computed(() => store2.isAdmin);

const props = defineProps({
  title: String,
  price: Number,
  id: String,
})

const onClickEdit = () => {
  console.log("edit");
  store.dispatch('products/startEditingProduct', props.id);

}
const onClickDelete = () => {
  if (confirm("Er du sikker på du vil slette hele produktet?")) {
    store.dispatch('products/deleteProduct', props.id);
  }
}
</script>

<template>
  <div class="productImportnantInfoContainer">
    <div class="titleItemsContainer">
      <p class="productInfo">{{ props.title }}</p>
      <div class="adminItemsContainer" v-if="isUserAdmin">
        <div class="adminItem" @click="onClickEdit">
          <img src="@/assets/icons/edit.png" alt="rediger produkt">
        </div>
        <div class="adminItem" @click="onClickDelete">
          <img src="@/assets/icons/trash.png" alt="slet produkt">
        </div>
      </div>
    </div>
    <p class="productInfo">{{ props.price }}DKK</p>
  </div>
</template>

<style scoped lang="scss">
.productImportnantInfoContainer {
  border-bottom: 1px solid $fontColorBlack;
  color: $fontColorBlack;

  .titleItemsContainer {
    display: flex;
    justify-content: space-between;

    .adminItemsContainer {
      display: flex;
      gap: 30px;
      align-items: center;

      .adminItem {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .productInfo {
    font-size: $fontSize24;
    margin-bottom: 1rem;
  }
}
</style>