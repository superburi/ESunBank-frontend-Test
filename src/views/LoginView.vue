<template>
  <div class="login-container">
    <h2>登入</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label>手機號碼</label>
        <input
          type="text"
          v-model="phone"
          placeholder="請輸入手機號碼"
          required
        />
      </div>
      <div class="input-group">
        <label>密碼</label>
        <input
          type="password"
          v-model="password"
          placeholder="請輸入密碼"
          required
        />
      </div>
      <button type="submit" class="login-btn">登入</button>
    </form>

    <button @click="goRegister" class="register-btn">註冊</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginView',
  data() {
    return {
      phone: '',
      password: '',
    }
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:8080/auth/login', {
          phoneNumber: this.phone,
          password: this.password,
        }, {
          withCredentials: true
        })

        if ( response.status === 200 ) { // 如果登入成功

          alert("登入成功！")
          this.$router.go(-1)
          
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('登入失敗：帳號或密碼錯誤')
          alert('登入失敗，請檢查帳號或密碼')
        } else {
          console.error('登入失敗：', error)
          alert('登入失敗，請稍後再試')
        }
      }
    },
    goRegister() {
      this.$router.push('/register')
    },
  },
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 垂直置中 */
  justify-content: center; /* 需要時可再加個 vh 來控制高度 */
  margin-top: 5rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; /* 固定寬度，讓表單看起來更整齊 */
}

.input-group {
  margin-bottom: 1rem;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 0.3rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}

.login-btn,
.register-btn {
  width: 300px; /* 與表單寬度一致 */
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
}

.login-btn:hover,
.register-btn:hover {
  background-color: #555;
}
</style>
