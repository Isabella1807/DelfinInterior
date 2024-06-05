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
          <p class="textHeadline">Om Delfin Interiør</p>
          <p class="textBlock">Velkommen til Delfin Interiør, hvor vi kombinerer passion for design med bæredygtighed og gode priser. Vi specialiserer os i salg af brugte designermøbler, der bringer stil og kvalitet ind i dit hjem uden at sprænge budgettet.</p>

          <p class="textsubheadline">Vores Historie</p>
          <p class="textBlock">Delfin Interiør er et nyt og spændende startup grundlagt af Lars Bertrand de Nully. Med en baggrund som grundlægger af Acubiz, har Lars bragt sin iværksætterånd og erfaring ind i verden af interiørdesign. Virksomheden blev etableret med en vision om, at gøre designermøbler tilgængelige for flere, samtidig med at vi bidrager til en mere bæredygtig fremtid.</p>

          <p class="textsubheadline">Vores Mission</p>
          <p class="textBlock">Vores mission er at give vores kunder adgang til smukke og funktionelle designer møbler til overkommelige priser. Vi tror på, at det er muligt at indrette med stil uden at gå på kompromis med kvalitet eller økonomi.</p>

          <p class="textsubheadline">Vores Værdier</p>
          <p class="textBlock"><strong>Kvalitet:</strong> Vi udvælger omhyggeligt vores sortiment af brugte designermøbler for at sikre, at hvert stykke lever op til høje standarder for både æstetik og holdbarhed.</p>
          <p class="textBlock"><strong>Bæredygtighed:</strong> Ved at give brugte møbler nyt liv bidrager vi til reduktion af affald og fremmer en cirkulær økonomi.</p>
          <p class="textBlock"><strong>Tilgængelighed:</strong> Vi ønsker, at alle skal have mulighed for at nyde godt af smukt design, uanset budget.</p>
          <p class="textBlock"><strong>Kundecentreret:</strong> Vores kunders tilfredshed er vores højeste prioritet. Vi lytter nøje til dine ønsker og behov for at finde de perfekte løsninger til dig og dit hjem.</p>

          <p class="textsubheadline">Kontakt Os</p>
          <p class="textBlock">Er du klar til at indrette dit hjem med smukke, brugte designermøbler? Kontakt os i dag for at høre mere om vores udvalg og hvordan vi kan hjælpe dig med at finde de perfekte møbler til dit hjem.</p>
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
        font-size: $fontSize24;
      }
      .textsubheadline{
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