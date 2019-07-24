<template>
  <div class="auth-overall">
    <div class="columns is-vcentered has-margin-none" style="height: 100vh">
      <div class="column is-12">
        <div class="has-text-centered has-margin-bottom-lg">
          <img src="@/assets/img/ctvoicer-white.png" alt="">
        </div>

        <div class="columns is-centered">
          <div class="column is-one-quarter-desktop is-one-third-tablet">
            <div class="box has-padding-lg">
              <div class="has-text-centered has-margin-bottom-lg has-header-logo">
                <img src="@/assets/img/logo.png" alt="" class="has-margin-right-sm">
                <strong>{{ product }}</strong>
              </div>

              <!-- Conteúdo da página -->
              <slot/>

            </div>
          </div>
        </div>

        <div class="has-text-centered has-margin-top-lg">
          <p class="slogan">Telephony Solutions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtLoginPage',

  props: {
    // Nome do produto que será exibido junto ao logotipo da CTVoicer.
    product: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@ctvoicer/ctstyle/src/utilities/initial-variables";

.auth-overall {
  background-color: $red;
  background-image: url('../../assets/img/login-background.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .slogan {
    color: $white;
    font-size: 1.85rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }
}

.has-header-logo img {
  height: $size-2;
  display: inline-block;
  vertical-align: bottom;
}

.has-header-logo strong {
  line-height: $size-2;
  display: inline-block;
  text-transform: uppercase;
  font-size: $size-4;
  color: $blue;
}
</style>
