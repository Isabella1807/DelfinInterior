<script setup>

</script>

<template>
  <div class="adminEditInfoOverlayContainer">
    <div class="globalContentWidth">
      <div class="AdminEditContainer">
        <p class="editOverlayHeader">Rediger produkt</p>
        <div class="inputContainer">
          <label for="title">Produkt navn</label>
          <input class="inputToEdit" name="title" id="title" type="text" placeholder="produkt navn">
        </div>
        <div class="inputContainer">
          <label for="price">Produkt pris</label>
          <input class="inputToEdit" name="price" id="price" type="text" placeholder="produkt pris">
        </div>
        <div class="inputContainer">
          <label for="weight">Produkt vægt</label>
          <input class="inputToEdit" name="weight" id="weight" type="text" placeholder="produkt vægt">
        </div>
        <div class="inputContainer">
          <label for="description">Produkt beskrivelse</label>
          <textarea class="inputToEdit" name="description" id="description" placeholder="produkt beskrivelsen"/>
        </div>
        <div class="buttonsContainer">
          <div id="cancel" class="button">
            <p>Cancel</p>
          </div>
          <div id="save" class="button">
            <p>Gem</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.adminEditInfoOverlayContainer {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9;
  background-color: rgba(#000000, 0.5);

  .AdminEditContainer {
    background-color: #FFFFFF;
    padding: 50px;

    .editOverlayHeader {
      font-size: $fontSize24;
      margin-bottom: 20px;
      color: $fontColorBlack;
    }

    .inputContainer {
      width: 100%;
      margin-bottom: 20px;

      .inputToEdit {
        font-size: $fontSize14;
        border: 1px solid $fontColorBlack;
        padding: 10px;
        width: 100%;

        &:focus {
          outline: none;
          border: 1px solid $fontColorBlack;
          background-color: #ededed;
          color: black;

        }
      }
    }

    .buttonsContainer {
      display: flex;
      justify-content: space-between;

      #save {
        background-color: #a4b2a1;
        color: white;
        border: #a4b2a1;

        &:hover {
          background-color: #738272;
        }
      }

      .button {
        border: 1px solid $fontColorBlack;
        padding: 10px 40px;

        &:hover {
          background-color: dimgray;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
}
</style>