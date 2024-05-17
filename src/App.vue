<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader></TheHeader>
  <main>
    <RouterView/>
  </main>
  <TheFooter></TheFooter>
</template>

<style scoped lang="scss">

</style>
