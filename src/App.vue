<script setup>
    
    import { ref, onMounted } from "vue";
    import { useRouter } from "vue-router";
    import axios from "axios";

    // 使用 Vue 3 的 `ref` 來管理使用者狀態
    const user = ref(null);
    const router = useRouter();

    // 檢查使用者是否已登入（從後端取得用戶資訊）
    const checkAuth = async () => {
    try {
        const response = await axios.get("http://localhost:8080/auth/me", {
        withCredentials: true, // 讓請求自動帶上 Cookie
        });
        user.value = response.data; // 例如 { userId: 1, phoneNumber: "0912XXX" }
        console.log(response.data);
    } catch (error) {
        console.error("未登入或 JWT 失效", error);
        user.value = null;
    }
    };

    // 登出方法
    const logout = async () => {
    try {
        const response = await axios.post("http://localhost:8080/auth/logout", 
        {}, { withCredentials: true });
        if ( response.status === 200 ) {
            alert(response.data)
            user.value = null;
            
        }
    } catch (error) {
        console.error("登出失敗", error);
    }
    };

    // 元件載入時檢查登入狀態
    onMounted(() => {
    checkAuth();
    });
    

</script>
<template>
    
    <div id="app">
    <!-- 頂部導覽列 -->
    <header class="app-header">
      <router-link to="/" class="app-logo">線上書籍借閱</router-link>
      <nav class="app-nav">
        <!-- ✅ 判斷 user 變數是否有值 -->
        <template v-if="user">
          <span class="user-info">你好 : {{ user.user_name }}</span>
          <button class="logout-btn" @click="logout">登出</button>
        </template>
        <template v-else>
          <router-link to="/login" class="login-btn">登入</router-link>
        </template>
      </nav>
    </header>

    <!-- 主要頁面顯示區 -->
    <main class="app-main">
      <router-view />
    </main>
  </div>


</template>
<style scoped>/* scoped 代表 css 只作用在組件中 */

/* 頂部導覽列基本排版 */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f4f4f4;
  border-radius: 5px;
}

.app-logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.app-nav {
  /* 這邊可以再加一些排版或放更多按鈕 */
}

.login-btn {
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
  border: 1px solid #333;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  transition: 0.2s;
}

.login-btn:hover {
  background-color: #333;
  color: #fff;
}

.app-main {
  /* 讓主要內容做置中或其他排版 */
  min-height: calc(100vh - 60px);
  padding: 1rem;
}
.user-info {
  margin-right: 1rem;
}

.logout-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
}
.logout-btn:hover {
  background-color: darkred;
}

</style>