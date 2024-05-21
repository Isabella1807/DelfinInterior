<script setup>
import HomeFurnitureCard from "@/components/HomeFurnitureCard.vue";
import diningchairPath from "@/assets/images/spisestol.jpg"
import tablePath from "@/assets/images/bord.jpg";
import armchairPath from "@/assets/images/lænestole2.jpg";
</script>

<template>
  <div class="homeFrontImageContainer">
    <img src="../assets/images/homeImage.jpg" alt="">
    <div class="homeBannerTextContainer">
      <div class="bannerTextLeft">
        <h1>Delfin Interior</h1>
        <h2>Køb og salg af designer-møbler</h2>
        <div class="linkBannerText">
          <router-link to="/shop">
            <div class="LinkContainer">
              <h2 class="bigText">Se udvalget af brugte designer møbler her</h2>
              <h2 class="smallText">Se vores udvalg her</h2>
              <img src="@/assets/icons/arrow.png" alt="Til shoppen" class="bannerLinkArrow">
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="globalContentWidth">
    <HomeFurnitureCard to="/shop" :bgImgPath="diningchairPath" cardTitle="Spisestole"></HomeFurnitureCard>
    <HomeFurnitureCard to="/shop" :bgImgPath="tablePath" cardTitle="Borde"></HomeFurnitureCard>
    <HomeFurnitureCard to="/shop" :bgImgPath="armchairPath" cardTitle="Lænestole"></HomeFurnitureCard>
  </div>
</template>

<style scoped lang="scss">
.homeFrontImageContainer {
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 60vh;

    @include md {
      height: 80vh;
    }
  }

  .homeBannerTextContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.8rem;
    background-color: rgba(115, 130, 114, 57%);
    height: 250px;
    width: 400px;

    .bannerTextLeft {
      display: flex;
      flex-direction: column;
      height: 100%;

      h1 {
        font-size: $smallHeadlineFont;
        color: $fontColorWhite;
      }

      h2 {
        font-size: $FontSize20;
        color: $fontColorWhite;
      }

      .linkBannerText {
        margin-top: auto;
        align-self: flex-end;
        font-style: italic;

        .smallText {
          display: block;
          white-space: nowrap;
        }

        .bigText {
          display: none;
        }

        .LinkContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;

          .bannerLinkArrow {
            height: 0.8rem;
            object-fit: contain;
          }
        }
      }
    }
  }

  @include md {

    .homeBannerTextContainer {
      height: 350px;
      width: 858px;

      .bannerTextLeft {
        h1 {
          font-size: $bigHeadlineFont;
        }

        h2 {
          font-size: $FontSize30;
        }

        .linkBannerText {
          margin-top: auto;
          align-self: flex-end;
          font-style: normal;

          .smallText {
            display: none;
            white-space: nowrap;
          }

          .bigText {
            display: block;
            white-space: nowrap;
          }

          .LinkContainer {
            .bannerLinkArrow {
              height: 1.1rem;
              object-fit: contain;
            }
          }

          &:hover{
            font-style: italic;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
