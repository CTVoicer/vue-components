<template>
  <div class="content has-text-grey has-text-centered">
    <p>
      <span class="icon is-medium">
        <i class="fas fa-exclamation-triangle fa-lg" />
      </span>
    </p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "CtNothingFound",

  props: {
    // Texto descritivo
    description: {
      type: String,
      default: "Nothing Found"
    }
  }
};
</script>
