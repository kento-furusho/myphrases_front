<template>
  <v-app-bar
    app
    :height="homeAppBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none black--text"
    >
      <app-title
        class="hidden-mobile-and-down"
      />
    </nuxt-link>
    <v-spacer />
    <app-signup-button />
    <app-login-button />
  </v-app-bar>
</template>
<script>
export default {
  data ({ $store }) {
    return {
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  }
}
</script>
