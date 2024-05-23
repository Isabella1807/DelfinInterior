<script setup>
</script>

<template>
  <div class="globalContentWidth">
    <div class="sellInfo">
      <div class="sellInfoContainer">
        <div class="sellInfoImageContainer">
          <img src="@/assets/images/chairs.jpg" alt="billede af nogle stole">
        </div>
        <div class="infoTextContainer">
          <div class="infoTextContainerHelper">
            <p class="bigFont">Vi køber dine brugte møbler</p>
            <p>Send os en mail med nedenstående kriterier, så kontakter vi dig med yderligere information.</p>
            <div class="centerAlignedInfo">
              <div class="contactInfoContainer">
                <div class="mailIconContainer">
                  <img src="@/assets/icons/mail.png" alt="Vores mail">
                </div>
                <p>delfin@hotmail.dk</p>
              </div>
              <p>Billede af møblet</p>
              <p>Stand af møblet</p>
              <p>Prisen du tager for møblet</p>
              <p>Designer</p>
              <p>Alder</p>
              <p>Materiale</p>
            </div>
            <p>Du kan forvente svar indenfor 3-5 hverdage.</p>
            <p>Vi kommer og henter møblet</p>
          </div>
        </div>
      </div>
      <div class="sellSteps">
        <div class="sellStepsContainer">
          <p class="bigHeadline"> Læs mere om hele processen her </p>

          <p>Når du sælger dine brugte møbler til Delfin Interior, kan du forvente en smidig og professionel proces fra
            start til slut. Her er en oversigt over, hvordan det foregår:</p>
        </div>

        <div class="sellStepsContainer">
          <p class="bigHeadline">Trin 1: Kontakt og Inspektion</p>
          <p class="smallHeadline">Kontakt Delfin Interior:</p>
          <p>Det første skridt er at tage kontakt til Delfin Interior via telefon eller email for at informere om,
            hvilke møbler du ønsker at sælge.</p>
          <p class="smallHeadline">Aftal en inspektion:</p>
          <p>En repræsentant fra Delfin Interior aftaler en tid for at komme og inspicere møblet. Dette kan være hjemme
            hos dig eller på en anden aftalt lokation.</p>
        </div>
        <div class="sellStepsContainer">
          <p class="bigHeadline">Trin 2: Vurdering og Forhandling</p>
          <p class="smallHeadline">Inspektion af møblet:</p>
          <p>Repræsentanten fra Delfin Interior undersøger møblets tilstand, kvalitet og eventuelle særlige kendetegn.
            Dette inkluderer en grundig gennemgang for at vurdere slid, materialer og design.</p>
          <p class="smallHeadline">Vurdering:</p>
          <p>Baseret på inspektionen foretages en professionel vurdering af møblets værdi. Dette tager højde for både
            møblets aktuelle tilstand og dets værdi på markedet.</p>
          <p class="smallHeadline">Prisforhandling:</p>
          <p>Efter vurderingen diskuterer repræsentanten og du den foreslåede pris. Her kan der forhandles for at nå
            frem til en pris, som begge parter er tilfredse med.</p>
        </div>
        <div class="sellStepsContainer">
          <p class="bigHeadline">Trin 3: Køb og Transport</p>
          <p class="smallHeadline">Aftale og betaling:</p>
          <p>Når I er enige om prisen, udarbejdes en købsaftale. Betalingen kan ofte foregå med det samme, enten kontant
            eller via bankoverførsel, afhængigt af hvad der er aftalt.</p>
          <p class="smallHeadline">Transport:</p>
          <p>Delfin Interior arrangerer transporten af møblet. Dette kan ske med det samme eller på et senere aftalt
            tidspunkt.</p>
        </div>
        <div class="sellStepsContainer">
          <p class="bigHeadline">Trin 4: Forberedelse og Salg</p>
          <p class="smallHeadline">Forberedelse:</p>
          <p>Når møblet ankommer til Delfin Interiors lager, bliver det gjort klar til salg. Dette kan inkludere
            rengøring og andre mindre forberedelser for at sikre, at møblet præsenteres bedst muligt.</p>

          <p class="smallHeadline">Kvalitetskontrol:</p>
          <p>Møblet gennemgår en kvalitetskontrol for at sikre, at det lever op til Delfin Interiors høje
            standarder.</p>

          <p class="smallHeadline">Salg:</p>
          <p>Møblet bliver derefter fotograferet og lagt op til salg på Delfin Interiors hjemmeside, sociale medier og i
            deres fysiske butik. Her vil det finde sin nye ejer, som kan glæde sig over et unikt møbel.</p>
        </div>
        <div class="sellStepsContainer">
          <p class="bigHeadline">Fordele ved at sælge til Delfin Interior</p>
          <p class="smallHeadline">Nem proces: </p>
          <p>Delfin Interior tager sig af alt fra inspektion til transport og istandsættelse.</p>

          <p class="smallHeadline">Professionel vurdering: </p>
          <p>Få en retfærdig vurdering af dit møbel baseret på ekspertviden.</p>

          <p class="smallHeadline">Bæredygtighed: </p>
          <p>Ved at sælge og købe brugte møbler bidrager du til en mere bæredygtig livsstil.</p>

          <p class="smallHeadline">Kvalitetsbehandling:</p>
          <p>Ved at vælge Delfin Interior sikrer du, at dine brugte møbler får den bedst mulige
            behandling og en ny chance for at blive værdsat i et andet hjem.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sellInfo {
  background-color: #FFFFFF;

  .sellSteps {
    color: $fontColorBlack;
    line-height: 2rem;
    padding: 0 2rem;

    .sellStepsContainer {
      margin: 2rem 0;

      .bigHeadline {
        font-size: $fontSize24;
        font-weight: bold;
      }

      .smallHeadline {
        font-size: $fontSize20;
        font-weight: 800;
        margin-top: 1rem;
      }

      p{
        font-size: $fontSize20;
      }
    }
  }
}

.sellInfoContainer {
  color: $fontColorWhite;
  font-size: $fontSize20;
  margin: 2rem 0 1rem 0;
  width: 100%;
  position: relative;

  .sellInfoImageContainer {
    display: none;
  }

  .infoTextContainer {
    background-color: #738272;
    border: 4px solid white;

    .infoTextContainerHelper {
      line-height: 2rem;
      padding: 1rem 4rem;

      .bigFont {
        font-size: $fontSize24;
        margin-bottom: 0.5rem;
      }

      .centerAlignedInfo {
        text-align: center;
        margin: 1rem 0;

        .contactInfoContainer {
          margin: 2rem 0;
        }

        .mailIconContainer {
          display: inline-block;
        }
      }
    }
  }
}


@include md {
  .sellInfo {
    background-color: #FFFFFF;

    .sellSteps {
      line-height: 2rem;
      padding: 0 2rem;

      .sellStepsContainer {
        margin: 2rem 0;

        .bigHeadline {
          font-size: $fontSize24;
          font-weight: bold;
        }

        .smallHeadline {
          font-size: $fontSize20;
          font-weight: 800;
          margin-top: 1rem;
        }
      }
    }

    .sellInfoContainer {
      color: $fontColorWhite;
      font-size: $fontSize20;
      margin: 3rem 0 1rem 0;
      width: 100%;
      position: relative;

      .sellInfoImageContainer {
        display: block;
        width: 100%;
        height: 70vh;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }

      .infoTextContainer {
        position: absolute;
        background-color: #738272;
        border: 4px solid white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 550px;

        .infoTextContainerHelper {
          line-height: 2rem;
          padding: 1rem 4rem;

          .bigFont {
            font-size: $fontSize24;
            margin-bottom: 0.5rem;
          }

          .centerAlignedInfo {
            text-align: center;
            margin: 1rem 0;

            .contactInfoContainer {
              margin: 2rem 0;
            }

            .mailIconContainer {
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>