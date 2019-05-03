<template>
  <nav class="navbar is-primary">
    <div :class="['container', breakpoint]">
      <div class="navbar-brand">
        <a v-if="typeof logoLink === 'string'" class="navbar-item">
          <img src="@/assets/img/logo.png" alt="" class="has-margin-right-sm">
          <strong>{{ product }}</strong>
        </a>
        <router-link
          v-else-if="typeof logoLink === 'object'"
          :to="logoLink"
          active-class=""
          exact-active-class=""
          class="navbar-item">
          <img src="@/assets/img/logo.png" alt="" class="has-margin-right-sm">
          <strong>{{ product }}</strong>
        </router-link>
        <div v-else class="navbar-item">
          <img src="@/assets/img/logo.png" alt="" class="has-margin-right-sm">
          <strong>{{ product }}</strong>
        </div>

        <a
          class="navbar-burger burger"
          data-target="CtNavbarBurger"
          aria-label="menu"
          aria-expanded="false"
          @click.prevent="toggleBurgerMenu($event)">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="CtNavbarBurger" class="navbar-menu">
        <!-- Conteúdo do `.navbar-menu` conforme a documentação do Bulma: https://bulma.io/documentation/components/navbar/#navbar-menu. -->
        <slot name="menu" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CtNavbar',

  props: {
    // Nome do produto que será exibido junto ao logotipo da CTVoicer.
    product: {
      type: String,
      required: true
    },

    // Altera o breakpoint que define a largura do container.
    breakpoint: {
      // `is-fluid` / `is-widescreen` / `is-fullhd`
      type: String,
      // O valor padrão é: `is-fluid`
      default: 'is-fluid'
    },

    // Destino da URL do logotipo. Se deixado em branco, o logotipo não terá nenhum link.
    logoLink: {
      // Pode ser uma URL literal (`String`) ou um objeto do Vue Router (`Object`).
      type: [String, Object]
    }
  },

  methods: {
    toggleBurgerMenu (event) {
      const navbarBurger = event.currentTarget
      const target = document.getElementById(navbarBurger.dataset.target)

      navbarBurger.classList.toggle('is-active')
      target.classList.toggle('is-active')
    }
  }
}
</script>
