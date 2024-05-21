<script setup>

</script>

<template>
  <div class="globalContentWidth">
    <div class="productContainer">
      <div class="productGallery">
        <div class="productFirstImage">
          <img src="@/assets/images/lænestol3.jpg" alt="">
        </div>
        <div class="galleryOptions">
          <div class="galleryOptionImage"><img src="@/assets/images/lænestol31.jpg" alt=""></div>
          <div class="galleryOptionImage"><img src="@/assets/images/lænestol32.jpg" alt=""></div>
          <div class="galleryOptionImage"><img src="@/assets/images/lænestol31.jpg" alt=""></div>
          <div class="galleryOptionImage"><img src="@/assets/images/lænestol32.jpg" alt=""></div>
        </div>
      </div>
      <div class="informationContainer">
        <div class="textContainer">
          <div>
            <p>Hans J. Wegner Queen</p>
            <p>30.000 DKK</p>
          </div>
          <div>
            <p>'Wegner Queen Chair' er et majestætisk ekko af 'Ox Chair' design, der modsat det originale dominerende
              design, besidder et feminint formsprog. Det skulpturelle og 'legende' design, er gengivet fra 'Ox Chair'
              med de voluminøse armlæn i en organisk dråbeform. Nakkestøtten er fjernet for at kreere en mere åben
              atmosfære og give den sit karakteristiske majestætiske udtryk, som gør stolen til en af Wegners mest
              elegante og ikke mindst ikoniske, lænestole.</p>
            <p>Stel udført i børstet eller sortlakeret rustfrit stål. Sæde
              med blindstel i massivtræ og formstøbt koldskum, polstret i ønsket tekstil eller læder</p>
            <p>Vægt: 28 kg </p>
          </div>
        </div>
        <div class="infoIconsContainer">
          <img src="@/assets/icons/routeIcon.png" alt="">
          <img src="@/assets/icons/truckIcon.png" alt="">
          <img src="@/assets/icons/smileIcon.png" alt="">
        </div>
        <div class="addToBasketButtonContainer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.productContainer {
  width: 100%;
  display: flex;
  gap: 4rem;
}

.productGallery {
  flex: 1;
  border: 1px solid red;
}

.productFirstImage {
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.galleryOptions {
  display: flex;
  width: 100%;

  .galleryOptionImage {
    flex: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.informationContainer {
  flex: 1;
  border: 1px solid blue;
}

/*
@include md {
  .productContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10rem;
  }
  .productGallery {
    width: 50%;
    border: 1px solid red;
  }
  .productFirstImage {
    width: 45%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .galleryOptions {
    display: flex;

    img {
      height: 150px;
    }
  }

  .informationContainer {
    width: 50%;
    border: 1px solid blue;
  }
}*/
</style>