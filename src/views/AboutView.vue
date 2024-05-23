<script setup>
</script>

<template>
  <div class="globalContentWidth">
    <div class="aboutContentContainer">
      <div class="aboutSlogan">
        <p>Ægte varer, til ægte priser</p>
      </div>
      <div class="aboutContainer">
        <div class="aboutCEO">
          <div class="CeoImgContainer">
            <img src="@/assets/images/guy.png" alt="Delfin De Nully CEO">
          </div>
          <p class="ceoImageText">Delfin De Nully, CEO</p>
        </div>
        <div class="aboutText">
          <p class="textHeadline">Manden bag Delfin Interior</p>

          <p class="textBlock">Historien bag vores brand begyndte med min passion for æstetik og design, og et ønske om at bringe
            enestående
            møbelkreationer ind i folks hjem. Fra de tidlige dage, hvor jeg besøgte loppemarkeder og auktioner i jagten
            på
            skjulte perler, voksede min fascination for designermøbler og deres historie.</p>

          <p class="textBlock">Efter utallige timer med omhyggelig kuratering og genoplivning af møbelhistorie, blev visionen om Delfin
            Interior en realitet. Med en dybfølt tro på vigtigheden af kvalitet og æstetik, stræber jeg efter at tilbyde
            vores kunder nøje udvalgte møbler, der både beriger deres hjem og fortæller en historie.</p>

          <p class="textBlock">Delfin Interior repræsenterer ikke blot en virksomhed, men en passion for at dele min kærlighed til
            designermøbler med verden. Det er mit mål at give vores kunder en unik oplevelse af luksus og stil til
            overkommelige priser, samtidig med at jeg fastholder respekten for møblernes unikke karakter og
            historie.</p>

          <p class="textBlock">Jeg er begejstret for at byde dig velkommen til vores online platform og ser frem til at dele denne rejse
            med
            dig, mens vi fortsætter med at udforske verdenen af tidløst design og skønhed sammen.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aboutContentContainer{
  width: 100%;
  margin: 3rem 0;

  .aboutSlogan{
    display: flex;
    justify-content: center;
    font-size: $fontSize30;
    font-style: italic;
    margin: 2rem 0;
  }
  .aboutContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    background-color: #FFFFFF;
    padding: 20px;

    .aboutCEO{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .CeoImgContainer{
        width: 300px;
        height: 400px;
        overflow: hidden;

        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .ceoImageText{
        margin-top: 10px;
        font-size: $fontSize20;
      }
    }
    .aboutText{
      flex: 2;
      line-height: 2rem;

      .textHeadline{
        font-size: $fontSize20;
      }

      .textBlock{
        margin-bottom: 1.5rem;
      }
    }
  }
}

@include md{
  .aboutContentContainer{
    width: 100%;
    margin: 3rem 0;

    .aboutSlogan{
      display: flex;
      justify-content: center;
      font-size: $fontSize30;
      font-style: italic;
      margin: 2rem 0;
    }
    .aboutContainer{
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 4rem;
      background-color: #FFFFFF;
      padding: 20px;

      .aboutCEO{
        flex: 1;
        align-items: start;
        justify-content: start;

        .CeoImgContainer{
          width: 300px;
          height: 400px;
          overflow: hidden;

          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .ceoImageText{
          margin-top: 10px;
          font-size: $fontSize20;
        }
      }
      .aboutText{
        flex: 2;
        line-height: 2rem;

        .textHeadline{
          font-size: $fontSize20;
        }

        .textBlock{
          margin-bottom: 1.5rem;
        }
      }
    }
  }
}
</style>