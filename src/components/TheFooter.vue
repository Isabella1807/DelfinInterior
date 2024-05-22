<script setup>

</script>

<template>
  <footer>
    <div class="globalContentWidth">
      <div class="footerContainer">
        <div class="footerLogo">
          <img src="@/assets/icons/bigLogo.png" alt="Delfin Interior Logo">
        </div>
        <div class="footerLinks">
          <div class="footerLinkContainer">
            <router-link to="/shop" class="footerLink">
              <p>Produkter</p>
            </router-link>
            <router-link to="/sell" class="footerLink">
              <p>Sælg til os</p>
            </router-link>
            <router-link to="/about" class="footerLink">
              <p>Om os</p>
            </router-link>
            <router-link to="/contact" class="footerLink">
              <p>Kontakt os</p>
            </router-link>
          </div>
        </div>
        <div class="footerSocials">
          <div class="socialeMediaContainer">
            <p>Følg os</p>
            <div class="socialMediaIcons">
              <img src="@/assets/icons/Instagram.png" alt="Vores Instagram">
              <img src="@/assets/icons/Facebook.png" alt="Vores Facebook">
            </div>
          </div>
        </div>
        <div class="footerCvr">
          <div class="cvrContainer">
            <p>Delfin Interior | CVR: 12345678</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footerLogo {
  grid-area: area1;
}

.footerLinks {
  grid-area: area2;
}

.footerSocials {
  grid-area: area3;
}

.footerCvr {
  grid-area: area4;
}

footer {
  position: relative;
  width: 100%;
  background-color: #738272;

  .footerContainer {
    display: grid;
    font-size: $fontSize20;
    color: $fontColorWhite;
    justify-content: center;
    grid-template-areas:
    "area1 area1"
    "area2 area3"
    "area4 area4";

    .footerLinkContainer {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
    }

    .socialeMediaContainer {
      display: flex;
      flex-direction: column;
      align-items: center;

      .socialMediaIcons {
        img {
          margin-top: 1rem;
        }
      }
    }
  }

  .footerCvr {
    margin: 4rem 0 1.5rem 0;
  }

  @include md {
    .footerContainer {
      display: grid;
      font-size: $fontSize20;
      color: $fontColorWhite;
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
    "area1 area2 area3 area4";

      .footerLinkContainer {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;

        .footerLink:hover {
          cursor: pointer;
        }
      }

      .socialeMediaContainer {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        .socialMediaIcons {
          display: flex;
          gap: 1rem;
        }
      }

      .footerCvr {
        display: flex;
        height: 100%;
        justify-content: end;
        align-items: end;
        padding-bottom: 2.2rem;
        margin: 0;
      }
    }
  }
}
</style>