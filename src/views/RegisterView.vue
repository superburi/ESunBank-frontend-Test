<template>
    <div>
      <h1>註冊</h1>
      <form @submit.prevent="handleRegister">
        <div>
          <label>帳號：</label>
          <input v-model="username" required />
        </div>
        <div>
          <label>密碼：</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label>信箱 (可選)：</label>
          <input type="email" v-model="email" />
        </div>
        <button type="submit">註冊</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterView',
    data() {
      return {
        username: '',
        password: '',
        email: ''
      }
    },
    methods: {
      handleRegister() {
        // 這裡可以打 API 做後端註冊動作
        console.log('嘗試註冊', this.username, this.password, this.email)
        // this.$router.push('/login')
      }
    }
  }
  </script>
  