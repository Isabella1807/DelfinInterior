<script setup lang="ts">
import {useStore} from 'vuex';
import {computed, onMounted, watch} from 'vue';
import {useProductStore} from "@/store/modules/productStore";

const store = useStore();
const store2 = useProductStore();

const categories = computed(() => store2.allCategories)

const selectedCategory = computed(() => store2.getSelectedCategory)
const selectCategory = (category: string) => {
  if (selectedCategory.value === category) {
    store2.resetCategory();
  } else {
    store2.setCategory(category);
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

  .categories {
    margin-bottom: 5px;

    &.selectedCategory {
      border-bottom: 2px solid #707070;
      display: inline-block;
      box-sizing: border-box;
    }

    &:hover {
      cursor: pointer;
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