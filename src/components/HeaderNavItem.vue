<script setup>
const props = defineProps({to: String, title: String});
</script>

<template>
  <p>
    <router-link :to="props.to">{{ props.title }}</router-link>
  </p>
</template>

<style scoped>
p{
  margin: 0 10px;
}
</style>