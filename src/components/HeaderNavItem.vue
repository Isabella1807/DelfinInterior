<script setup>
const props = defineProps({to: String, title: String});
</script>

<template>
  <router-link :to="props.to">
    <div class="burgerNavClickArea">
      <p>
        {{ props.title }}
      </p>
    </div>
  </router-link>
</template>

<style scoped lang="scss">

.burgerNavClickArea {
  display: flex;
  align-items: center;
  background-color: #606c5f;
  height: 2.8rem;
  margin-bottom: 0.6rem;
  padding: 0.6rem;

  &:hover {
    cursor: pointer;
  }

  @include md {
    background-color: inherit;
  }

  p {
    font-size: $FontSize20;
    color: $fontColorWhite;

    :hover {
      cursor: pointer;
    }
  }
}
</style>