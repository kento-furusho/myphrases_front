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
          :email.sync="params.user.email"
        />
        <user-form-password
          :password.sync="params.user.password"
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
            @click="login"
          >
            ログインする
          </v-btn>
        </v-card-text>
      </v-form>
    </template>
  </user-form-card>
</template>
<script>
export default {
  layout: 'before-login',
  data () {
    return {
      isValid: false,
      loading: false,
      params: { user: { email: '', password: '' } }
    }
  },
  method: {
    login () {
      this.loading = true
    }
  }
}
</script>
