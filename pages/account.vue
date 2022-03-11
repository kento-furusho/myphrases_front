<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'logged-in',
  // ページアクセスを制限
  validate ({ route }) {
    // falseの時validate
    return route.name !== 'account'
  }
}
</script>
