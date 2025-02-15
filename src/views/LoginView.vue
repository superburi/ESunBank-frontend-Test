<template>
    <div>
      <h1>登入</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label>帳號：</label>
          <input v-model="username" required />
        </div>
        <div>
          <label>密碼：</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">登入</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleLogin() {
        // 這裡可以打 API 檢查帳密是否正確
        // 成功的話就導頁到首頁或其他頁面
        console.log('嘗試登入', this.username, this.password)
        // this.$router.push('/')
      }
    }
  }
  </script>
  