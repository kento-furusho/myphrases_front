<template>
  <v-menu
    app
    offset-x
    offset-y
    max-width="200"
  >
    <template
      #activator="{ on }"
    >
      <v-btn
        icon
        v-on="on"
      >
        <v-icon>
          mdi-account-circle
        </v-icon>
      </v-btn>
    </template>
    <v-list
      dense
    >
      <v-subheader>
        ログイン中のユーザー
      </v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>
            ユーザー名が表示されます
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-subheader>
        アカウント
      </v-subheader>
      <v-list-item
        v-for="(menu, i) in menus"
        :key="i"
        :to="{ name: menu.name }"
      >
        <v-list-item-icon
          class="mr-2"
        >
          <v-icon
            size="22"
            v-text="menu.icon"
          />
        </v-list-item-icon>
        <v-list-item-title>
          {{ $my.pageTitle(menu.name) }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item @click="logout(apiUrl)">
        <v-list-item-icon
          class="mr-2"
        >
          <v-icon size="22">
            mdi-logout-variant
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ $my.pageTitle('logout') }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import axios from 'axios'
export default {
  data ({ $config: { apiUrl } }) {
    return {
      menus: [
        { name: 'account-settings', icon: 'mdi-account-cog' },
        { name: 'account-password', icon: 'mdi-lock-outline' }
      ],
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
    logout (value) {
      const token = window.localStorage.getItem('access-token')
      axios
        .delete(value + '/api/v1/auth/sign_out', {
          headers: {
            uid: window.localStorage.uid,
            'access-token': token,
            client: window.localStorage.client
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
          this.$router.push('/')
        })
    }
  }
}
</script>
