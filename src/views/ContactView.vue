<script setup>
import {testdb} from "@/database/initFirebase.js"
import {collection, getDocs} from "firebase/firestore";

const store = useStore();

const selectedCategory = computed(() => store.getters["products/getSelectedCategory"])

const colRef = collection(testdb.db, 'products')
getDocs(colRef) //Henter alle docuemnter inde i colRef collectionen
    .then ((snapshot) => {
      let products = []
      snapshot.docs.forEach((doc) => {
        products.push({...doc.data(), id: doc.id})
      })
      console.log(products)
    })
</script>

<template>
  <div class="globalContentWidth">
    <div>
      <p></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.globalContentWidth{
  width: 100%;
  background-color: deeppink;
}
</style>