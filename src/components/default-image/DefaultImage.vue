<template>
  <img :src="imageSource" :alt="alt" :width="width" :height="height" />
</template>

<script>
export default {
  name: "CtDefaultImage",

  props: {
    // Atributo `src` da imagem
    src: {
      type: String,
      default: null
    },

    // Atributo `alt` da imagem. Caso nenhuma imagem seja informada através do atributo `src`, o texto `alt` será exibido no lugar.
    alt: {
      type: String,
      default: ""
    },

    // Largura da imagem
    width: {
      type: [String, Number],
      default: 150
    },

    // Altura da imagem
    height: {
      type: [String, Number],
      default: 150
    }
  },

  computed: {
    imageSource() {
      if (this.src === null) {
        return `https://via.placeholder.com/${this.width}x${this.height}?text=${this.alt}`;
      }

      return this.src;
    }
  }
};
</script>
