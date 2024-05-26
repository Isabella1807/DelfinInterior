<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore();

const categories = computed(() => store.getters["products/getAllCategories"])
const selectedCategory = computed(() => store.getters["products/getSelectedCategory"])
const selectCategory = (category) => {

  if (selectedCategory.value === category) {
    store.dispatch("products/resetCategory")
  } else {
    store.dispatch('products/setCategory', category)
  }
}
</script>

<template>
  <div class="categoriesContainer">
    <div class="categoryTitle">
      <p>Kategorier</p>
    </div>
    <div>
      <p
          class="categories"
          :class="{selectedCategory: category === selectedCategory}"
          v-for="category in categories"
          @click="selectCategory(category)"
      >
        {{ category }}
      </p>
    </div>
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
  .categories{
    &.selectedCategory{
      font-weight: bold;
    }
    &:hover{
      cursor:pointer;
    }
  }
}

@include md {
  .categoriesContainer {
    display: block;
    max-width: 14rem;
    min-width: 12rem;
    overflow: hidden;

    .categoryTitle {
    }
  }
}
</style>