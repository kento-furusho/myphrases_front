<template>
  <user-form-card>
    <template
      #user-form-card-content
    >
      <v-form
        ref="form"
        v-model="isValid"
      >
        <user-form-name
          :name.sync="name"
        />
        <user-form-email
          :email.sync="email"
        />
        <user-form-password
          :password.sync="password"
          set-validation
        />
        <v-btn
          :disabled="!isValid || loading"
          :loading="loading"
          block
          color="appblue"
          class="white--text"
          @click="signup(apiUrl)"
        >
          登録する
        </v-btn>
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
      isValid: false,
      loading: false,
      redirectPath: $store.state.loggedIn.redirectPath
    }
  },
  methods: {
    signup (value) {
      axios
        .post(value + '/api/v1/auth', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then((response) => {
          localStorage.setItem('access-token', response.headers['access-token'])
          localStorage.setItem('client', response.headers.client)
          localStorage.setItem('uid', response.headers.uid)
          this.access_token = response.headers['access-token']
          this.client = response.headers.client
          this.uid = response.headers.uid
        })
      this.$router.push(this.redirectPath)
    }
  }
}
</script>
