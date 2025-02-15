<template>
  <div class="register-container">
    <h2>註冊</h2>
    <form @submit.prevent="handleRegister">
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
        <label>使用者名稱</label>
        <input
          type="text"
          v-model="username"
          placeholder="請輸入使用者名稱"
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
      <button type="submit" class="register-btn">註冊</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegisterView',
  data() {
    return {
      phone: '',
      username: '',
      password: '',
    }
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post('http://localhost:3000/api/register', {
          phone: this.phone,
          username: this.username,
          password: this.password,
        })
        console.log('註冊回傳：', response.data)
        // 若成功，可以導向登入頁面或首頁
        // this.$router.push('/login')
      } catch (error) {
        console.error('註冊失敗：', error)
        alert('註冊失敗，請檢查資料或伺服器狀態')
      }
    },
  },
}
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top: 5rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
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

.register-btn {
  width: 300px;
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

.register-btn:hover {
  background-color: #555;
}
</style>
