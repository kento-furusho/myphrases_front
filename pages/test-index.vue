<template>
  <div id="app">
    <h3>テスト</h3>
    <div v-if="client === ''">
      <div>
        <h1>SignUp</h1>
        <label for="name">name</label>
        <input id="name" v-model="name" type="name">
        <label for="email">email</label>
        <input id="email" v-model="email" type="email">
        <label for="password">password</label>
        <input id="password" v-model="password" type="password">
        <button @click="signup(apiUrl)">
          新規登録
        </button>
      </div>
      <div>
        <h1>SignIn</h1>
        <label for="name">name</label>
        <input id="name" v-model="name" type="name">
        <label for="email">email</label>
        <input id="email" v-model="email" type="email">
        <label for="password">password</label>
        <input id="password" v-model="password" type="password">
        <button @click="signin(apiUrl)">
          ログイン
        </button>
      </div>
    </div>
    <div v-else>
      <button @click="signout(apiUrl)">
        ログアウト
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data ({ $config: { apiUrl } }) {
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
      posts: []
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
    },
    signin (value) {
      axios
        .post(value + '/api/v1/auth/sign_in', {
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
    },
    signout (value) {
      window.console.log(this.uid)
      window.console.log(this.access_token)
      window.console.log(this.client)
      axios
        .delete(value + '/api/v1/auth/sign_out', {
          headers: {
            uid: window.localStorage.uid,
            'access-token': this.access_token,
            client: this.client
          }
        })
        .then((response) => {
          window.console.log(response)
          this.access_token = ''
          this.client = ''
          this.uid = ''
          localStorage.removeItem('uid')
          localStorage.removeItem('access-token')
          localStorage.removeItem('client')
        })
    }
  }
}
</script>
