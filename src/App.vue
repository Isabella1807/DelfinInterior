<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import editOverlay from "./components/EditProductOverlay.vue";
</script>

<template>
  <TheHeader/>
  <main>
    <editOverlay/>
    <RouterView/>
  </main>
  <TheFooter/>
</template>

<style scoped lang="scss">

</style>
