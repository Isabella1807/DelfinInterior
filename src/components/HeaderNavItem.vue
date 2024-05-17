<script setup>
const props = defineProps({to: String, title: String});
</script>

<template>
  <p>
    <router-link :to="props.to">{{ props.title }}</router-link>
  </p>
</template>

<style scoped lang="scss">
p{
  margin-right: 3.7rem;
  font-size: $FontSize20;
  color: $fontColorWhite;
  :hover{
    cursor: pointer;
  }
}
</style>