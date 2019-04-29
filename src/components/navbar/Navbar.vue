<template>
  <nav class="navbar is-primary">
    <div class="container">
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

        <a class="navbar-burger burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <slot name="content" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CtNavbar',

  props: {
    product: String,
    logoLink: [String, Object]
  }
}
</script>
