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
          <div class="abeceo">
            <img src="@/assets/images/guy.png" alt="Delfin De Nully CEO">
          </div>
          <p>Delfin De Nully, CEO</p>
        </div>
        <div class="aboutText">
          <p>Manden bag Delfin Interior</p>

          <p>Historien bag vores brand begyndte med min passion for æstetik og design, og et ønske om at bringe
            enestående
            møbelkreationer ind i folks hjem. Fra de tidlige dage, hvor jeg besøgte loppemarkeder og auktioner i jagten
            på
            skjulte perler, voksede min fascination for designermøbler og deres historie.</p>

          <p>Efter utallige timer med omhyggelig kuratering og genoplivning af møbelhistorie, blev visionen om Delfin
            Interior en realitet. Med en dybfølt tro på vigtigheden af kvalitet og æstetik, stræber jeg efter at tilbyde
            vores kunder nøje udvalgte møbler, der både beriger deres hjem og fortæller en historie.</p>

          <p>Delfin Interior repræsenterer ikke blot en virksomhed, men en passion for at dele min kærlighed til
            designermøbler med verden. Det er mit mål at give vores kunder en unik oplevelse af luksus og stil til
            overkommelige priser, samtidig med at jeg fastholder respekten for møblernes unikke karakter og
            historie.</p>

          <p>Jeg er begejstret for at byde dig velkommen til vores online platform og ser frem til at dele denne rejse
            med
            dig, mens vi fortsætter med at udforske verdenen af tidløst design og skønhed sammen.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aboutContentContainer{
  width: 100%;
  border: 1px solid red;
  .aboutSlogan{
  }
  .aboutContainer{
    width: 100%;
    border: 1px solid blue;
    display: flex;
    gap: 4rem;

    .aboutCEO{
      flex: 1;
      .abeceo{
        width: 100%;
        overflow: hidden;

        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .aboutText{
      flex: 2;
    }
  }
}
</style>