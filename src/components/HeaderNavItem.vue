<script setup>
const props = defineProps({to: String, title: String});
</script>

<template>
  <router-link :to="props.to" class="routerLink" active-class="active">
    <div class="burgerNavClickArea">
      <p>
        {{ props.title }}
      </p>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.routerLink{
  &.active{
    .burgerNavClickArea{
      border-bottom: 2px solid white;
      margin-top: 2px;
    }
  }
}
.burgerNavClickArea {
  display: flex;
  align-items: center;
  background-color: #606c5f;
  margin-bottom: 0.6rem;
  padding: 0.6rem;
  box-sizing: border-box;
  position: relative;

  &:hover{
    cursor: pointer;
    border-bottom: 2px solid white;
    margin-top: 2px;
  }

  @include md {
    background-color: inherit;
  }

  p {
    font-size: $fontSize20;
    color: $fontColorWhite;

    :hover {
      cursor: pointer;
    }
  }
}
</style>