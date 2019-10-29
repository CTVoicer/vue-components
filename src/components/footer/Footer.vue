<template>
  <footer class="has-background-primary">
    <div :class="['container', breakpoint]">
      <div class="has-text-centered is-copyright">
        <a :href="contactWebsite" target="_blank">{{ website }}</a
        ><br />
        {{ copyright }}<br />
        {{ version }}
      </div>

      <nav class="navbar is-primary is-footer">
        <div class="navbar-brand">
          <div class="navbar-item">
            <img src="@/assets/img/ctvoicer.png" alt="" />
          </div>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <a
              :href="contactAddress"
              class="navbar-item"
              target="_blank"
              rel="nofollow"
              :title="address"
              :data-tooltip="address"
            >
              <span
                class="icon has-background-white is-large is-rounded has-text-primary"
              >
                <i class="fas fa-lg fa-map-marker-alt"></i>
              </span>
            </a>
            <a
              :href="contactEmail"
              class="navbar-item"
              target="_blank"
              rel="nofollow"
              :title="email"
              :data-tooltip="email"
            >
              <span
                class="icon has-background-white is-large is-rounded has-text-primary"
              >
                <i class="fas fa-lg fa-envelope"></i>
              </span>
            </a>
            <a
              :href="contactPhone"
              class="navbar-item"
              target="_blank"
              rel="nofollow"
              :title="phone"
              :data-tooltip="phone"
            >
              <span
                class="icon has-background-white is-large is-rounded has-text-primary"
              >
                <i class="fas fa-lg fa-phone"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CtFooter",

  props: {
    // Altera o breakpoint que define a largura do container
    breakpoint: {
      // `is-fluid` / `is-widescreen` / `is-fullhd`
      type: String,
      default: "is-fluid"
    },

    // Permite informar a versão do sistema
    version: {
      type: String,
      default: "UNRELEASED"
    }
  },

  data() {
    return {
      website: "www.ctvoicer.com.br",
      address: `Alameda Dr. Carlos de Carvalho, 373, 1° Andar, Centro - Curitiba/PR`,
      email: "contato@ctvoicer.com.br",
      phone: "(41) 2103-9300"
    };
  },

  computed: {
    copyright() {
      return "Copyright CTVoicer 2018-" + new Date().getFullYear();
    },
    contactWebsite() {
      return "https://" + this.website;
    },
    contactAddress() {
      return this.address === null
        ? ""
        : "//www.google.com/maps/place/" + encodeURI(this.address);
    },
    contactEmail() {
      return this.email === null ? "" : "mailto:" + this.email;
    },
    contactPhone() {
      return this.phone === null ? "" : "call:" + this.phone.replace(/\D/g, "");
    }
  }
};
</script>

<style lang="scss" scoped>
.is-footer {
  z-index: 5;
}

// TODO: Posicionamento do texto copyright
.is-copyright {
  position: absolute;
  z-index: 10;
  top: 1.4rem;
  left: calc(50% - 62px); // O elemento possui cerca de 124px
  color: $white-ter;
  font-size: $size-7;

  a,
  a:hover,
  a:focus,
  a.is-active {
    color: $white-ter;
    text-decoration: underline;
  }
}
</style>
