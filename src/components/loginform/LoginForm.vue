<template>
  <form action="#" method="POST">
    <b-field
      label-for="form.email"
      :label="email_label"
      :message="errors.email || errors.email"
      :type="errors.email ? 'is-danger' : ''"
      :custom-class="errors.email ? 'has-text-danger' : ''"
    >
      <b-input
        type="email"
        icon="user"
        :placeholder="email_placeholder"
        v-model="form.email"
        autofocus
      />
    </b-field>

    <b-field
      label-for="form.password"
      :label="password_label"
      :message="errors.password || errors.password"
      :type="errors.password ? 'is-danger' : ''"
      :custom-class="errors.password ? 'has-text-danger' : ''"
    >
      <b-input
        type="password"
        icon="lock"
        :placeholder="password_placeholder"
        v-model="form.password"
        password-reveal
      />
    </b-field>

    <button
      type="submit"
      class="button is-fullwidth is-danger has-margin-bottom-sm"
      @click.prevent="login()"
    >
      {{ login_label }}
    </button>
  </form>
</template>

<script>
export default {
  name: "CtLoginForm",

  props: {
    // Campo `email`
    email: String,
    // Label do campo de endereço de e-mail
    email_label: {
      type: String,
      default: "E-mail address"
    },
    // Placeholder do campo de endereço de e-mail
    email_placeholder: {
      type: String,
      default: "Your email address"
    },
    // Campo `password`
    password: String,
    // Label do campo de senha
    password_label: {
      type: String,
      default: "Password"
    },
    // Placeholder do campo de senha
    password_placeholder: {
      type: String,
      default: "Your access password"
    },
    // Label do botão de login
    login_label: {
      type: String,
      default: "Login"
    },
    // Mensagens de erro devido à validação dos campos
    errors: {
      type: Object,
      // O valor padrão é: {}
      default() {
        return {};
      }
    }
  },

  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },

  mounted() {
    this.form.email = this.email;
    this.form.password = this.password;
  },

  watch: {
    "form.email"() {
      // Atualiza o valor do campo `email`.
      // @arg O argumento é uma `String` representando o valor inserido pelo usuário.
      this.$emit("update:email", this.form.email);
    },
    "form.password"() {
      // Atualiza o valor do campo `password`.
      // @arg O argumento é uma `String` representando o valor inserido pelo usuário.
      this.$emit("update:password", this.form.password);
    }
  },

  methods: {
    login() {
      // Disparado quando o usuário clicar no botão `login`.
      this.$emit("login");
    }
  }
};
</script>
