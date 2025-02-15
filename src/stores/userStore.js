// src/stores/userStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,  // 放使用者資料
  }),
  actions: {
    // 從後端 /auth/me or /auth/check 取得使用者資訊
    async fetchUser() {
      try {
        const response = await axios.get("http://localhost:8080/auth/me", { withCredentials: true });
        this.user = response.data; 
      } catch (error) {
        this.user = null;
        console.error("fetchUser失敗", error)
      }
    },
    logout() {
      // 這邊可以呼叫後端 /auth/logout
      this.user = null;
    }
  }
})
