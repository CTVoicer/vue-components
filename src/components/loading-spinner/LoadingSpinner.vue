<template>
  <section class="section has-text-centered">
    <div class="ripple">
      <div></div>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CtLoadingSpinner"
};
</script>

<style lang="scss" scoped>
.ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    border: 4px solid $red;
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
}

@keyframes ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
