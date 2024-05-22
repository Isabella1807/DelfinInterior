<script setup>
import Banner from "../components/shopComponents/Banner.vue"
import homeImage from "@/assets/images/homeImage.jpg";
import ProductCard from "@/components/shopComponents/ProductCard.vue";
import loungechair from "@/assets/images/lænestol3.jpg";
import stol from "@/assets/images/spisestol.jpg";
import bord from "@/assets/images/bord.jpg";
</script>

<template>
  <div class="globalContentWidth">
    <div class="shopContainer">
      <Banner :bannerImg="homeImage" shopCategory="Alle produkter"/>
      <div class="shopContentContainer">

        <div class="sortingOptions">
          <div class="mobileCategory">
            <p>Kategorier:</p>
            <img src="" alt="">
          </div>
          <div>
            <p>Sorter efter:</p>
            <img src="" alt="">
          </div>
        </div>


        <div class="lowerShopContainer">

          <div class="categoriesContainer">
            <div class="categoryTitle">
              <p>Kategorier</p>
            </div>
            <p>Lænestole</p>
            <p>spisebordsstolffdfdffddfetesttesttesttesttesttesttesttesttesttesttesttest</p>
            <p>Borde</p>
          </div>

          <div class="productsContainer">
            <ProductCard :imgPath="stol"></ProductCard>
            <ProductCard :imgPath="bord"></ProductCard>
            <ProductCard :imgPath="loungechair"></ProductCard>
            <ProductCard :imgPath="stol"></ProductCard>
            <ProductCard :imgPath="loungechair"></ProductCard>
            <ProductCard :imgPath="bord"></ProductCard>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.globalContentWidth {
  width: 100%;
}

.shopContentContainer {
  color: $fontColorBlack;
  .sortingOptions {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #707070;
    margin-bottom: 2rem;
    font-size: $fontSize20;

    .mobileCategory {
      display: block;
    }
  }

  .lowerShopContainer {
    display: flex;
    justify-content: center;

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
    }

    .productsContainer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
}


@include md {
  .shopContentContainer {
    .sortingOptions {
      justify-content: end;

      .mobileCategory {
        display: none;
      }
    }

    .lowerShopContainer {
      justify-content: space-between;
      .categoriesContainer {
        display: block;
        max-width: 12rem;
        overflow: hidden;
        .categoryTitle {
        }
      }

      .productsContainer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
    }
  }
}
</style>