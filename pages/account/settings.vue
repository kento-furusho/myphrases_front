<template>
  <div>
    phrases
    <v-btn
      @click="getUser(apiUrl)"
    >
      ユーザーゲット
    </v-btn>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  layout: 'logged-in',
  data ({ $config: { apiUrl } }) {
    return {
      apiUrl,
      name: '',
      email: '',
      uid: ''
    }
  },
  methods: {
    async getUser (value) {
      const userId = window.localStorage.getItem('name')
      window.console.log(userId)
      try {
        const res = await axios.get(value + '/api/v1/users/1')
        window.console.log(res)
      } catch (error) {
        window.console.log(error)
      }
    }
  }
}
</script>
