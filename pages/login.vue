<template>
  <user-form-card>
    <template
      #user-form-card-content
    >
      <v-form
        ref="form"
        v-model="isValid"
      >
        <user-form-email
          :email.sync="email"
        />
        <user-form-password
          :password.sync="password"
        />
        <v-card-text
          class="px-0"
        >
          <v-btn
            :disabled="!isValid || loading"
            :loading="loading"
            block
            color="appblue"
            class="white--text"
            @click="login(apiUrl)"
          >
            ログインする
          </v-btn>
        </v-card-text>
      </v-form>
    </template>
  </user-form-card>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'before-login',
  data ({ $config: { apiUrl }, $store }) {
    return {
      apiUrl,
      name: '',
      email: '',
      password: '',
      uid: '',
      access_token: '',
      client: '',
      title: '',
      content: '',
      tasks: [],
      comment: '',
      posts: [],
      id: '',
      isValid: false,
      loading: false,
      redirectPath: $store.state.loggedIn.homePath
    }
  },
  methods: {
    async login (value) {
      window.console.log(value)
      window.console.log(this.email)
      await axios
        .post(value + '/api/v1/auth/sign_in', {
          email: this.email,
          password: this.password
        })
        .then((response) => {
          localStorage.setItem('access-token', response.headers['access-token'])
          localStorage.setItem('client', response.headers.client)
          localStorage.setItem('uid', response.headers.uid)
          localStorage.setItem('name', this.name)
          this.access_token = response.headers['access-token']
          this.client = response.headers.client
          this.uid = response.headers.uid
        })
      this.$router.push(this.redirectPath)
    }
  }
}
</script>
