<script setup>
import HeaderNavItem from "@/components/HeaderNavItem.vue";
</script>

<template>
  <header>
    <div class="headerItemsContainer globalContentWidth">
      <div>
        <router-link to="/" class="headerLogo">
          <img src="../assets/Logo.png" alt="Delfin Interior Logo">
        </router-link>
      </div>
      <nav>
        <div class="navLinks">
          <HeaderNavItem to="/shop" title="Produkter"/>
          <HeaderNavItem to="/sell" title="Sælg til os"/>
          <HeaderNavItem to="/about" title="Om os"/>
          <HeaderNavItem to="/contact" title="Kontakt"/>
        </div>
        <div class="navIcons">
          <img src="../assets/searchIcon.png" alt="Søg">
          <img src="../assets/cartIcon.png" alt="Din Kurv">
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  width: 100%;
  height: 8rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #738272;
  align-items: center;
}

.headerLogo {
  img {
    height: 5rem;
  }
  :hover{
    cursor: pointer;
  }
}

.headerItemsContainer {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

nav {
  display: flex;
  justify-content: center;
}

.navLinks {
  display: flex;
  align-items: center;
}

.navIcons {
  display: flex;
  align-items: center;
  gap: 3.7rem;

  img{
    height: 1.8rem;
  }
}
</style>