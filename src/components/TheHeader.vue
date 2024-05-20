<script setup>
import HeaderNavItem from "@/components/HeaderNavItem.vue";
import {ref} from "vue";

let isBurgerMenuVisible = ref(false);

const toggleBurgerMenu = () => {
  isBurgerMenuVisible.value = !isBurgerMenuVisible.value;
}
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
          <img src="../assets/icons/searchIcon.png" alt="Søg">
          <img src="../assets/icons/cartIcon.png" alt="Din Kurv">
          <div class="navBurgerIconsContainer">
            <img src="../assets/icons/burgerIcon3.png" alt="Burgermenu" class="burgermenuIcon" @click="toggleBurgerMenu"
                 v-show="!isBurgerMenuVisible">
            <img src="../assets/icons/closeIcon.png" alt="Close Burgermenu" class="CloseBurgermenuIcon"
                 @click="toggleBurgerMenu" v-show="isBurgerMenuVisible">
          </div>
        </div>
      </nav>
    </div>
    <nav v-show="isBurgerMenuVisible">
      <div class="burgerNavLinks">
        <div class="burgerNavClickContainer globalContentWidth">
          <HeaderNavItem to="/shop" title="Produkter"/>
          <HeaderNavItem to="/sell" title="Sælg til os"/>
          <HeaderNavItem to="/about" title="Om os"/>
          <HeaderNavItem to="/contact" title="Kontakt"/>
        </div>
      </div>
    </nav>
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

  .headerItemsContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .headerLogo {
      img {
        height: 5rem;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
}

nav {
  display: flex;
  justify-content: space-evenly;

  .navLinks {
    display: none;
    align-items: center;
    @include md {
      display: flex;
    }
  }

  .navIcons {
    display: flex;
    align-items: center;
    margin-left: 3.7rem;

    img {
      height: 1.8rem;

      &:hover {
        cursor: pointer;
      }
    }

    .navBurgerIconsContainer {
      display: block;
      @include md {
        display: none;
      }
    }

    .burgermenuIcon {
      display: block;
      @include md {
        display: none;
      }
    }
  }

  .navLinks, .navIcons {
    align-items: center;
    gap: 3.7rem;
  }

  .burgerNavLinks {
    display: block;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #738272;

    @include md {
      display: none;
    }
  }
}
</style>