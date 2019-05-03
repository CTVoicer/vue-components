<template>
  <form action="#" method="POST">
    <b-field
      label-for="form.email"
      :label="$t('login_form.fields.email')"
      :message="errors.email || errors.email"
      :type="errors.email ? 'is-danger' : ''"
      :custom-class="errors.email ? 'has-text-danger' : ''">
      <b-input
        type="email" icon="user"
        :placeholder="$t('login_form.placeholders.email')"
        v-model="form.email"
        autofocus />
    </b-field>

    <b-field
      label-for="form.password"
      :label="$t('login_form.fields.password')"
      :message="errors.password || errors.password"
      :type="errors.password ? 'is-danger' : ''"
      :custom-class="errors.password ? 'has-text-danger' : ''">
      <b-input
        type="password" icon="lock"
        :placeholder="$t('login_form.placeholders.password')"
        v-model="form.password"
        password-reveal />
    </b-field>

    <button
      type="submit"
      class="button is-fullwidth is-danger has-margin-bottom-sm"
      @click.prevent="login()"
      v-t="'login_form.login_button'" />
  </form>
</template>

<script>
export default {
  name: 'CtLoginForm',

  props: {
    // Campo `email`
    email: String,
    // Campo `password`
    password: String,
    // Mensagens de erro devido à validação dos campos
    errors: {
      type: Object,
      // O valor padrão é: {}
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  mounted () {
    this.form.email = this.email
    this.form.password = this.password
  },

  watch: {
    'form.email' () {
      // Atualiza o valor do campo `email`.
      // @arg O argumento é uma `String` representando o valor inserido pelo usuário.
      this.$emit('update:email', this.form.email)
    },
    'form.password' () {
      // Atualiza o valor do campo `password`.
      // @arg O argumento é uma `String` representando o valor inserido pelo usuário.
      this.$emit('update:password', this.form.password)
    }
  },

  methods: {
    login () {
      // Disparado quando o usuário clicar no botão `login`.
      this.$emit('login')
    }
  }
}
</script>
