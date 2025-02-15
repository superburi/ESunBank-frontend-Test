<script setup>
    
    import { ref } from "vue";
    

</script>
<template>
    
    <div id="app">
    <!-- 頂部導覽列 -->
    <header class="app-header">
      <div class="app-logo">線上書籍借閱</div>
      <nav class="app-nav">
        <!-- 右上角登入按鈕，如果尚未登入就顯示；若你有登入狀態，可再判斷顯示其他按鈕 -->
        <router-link to="/login" class="login-btn">登入</router-link>
      </nav>
    </header>

    <!-- 主要頁面顯示區 -->
    <main class="app-main">
      <router-view />
    </main>
  </div>

    <!--
    <div>
        <nav>
            <router-link to="/">首頁</router-link> |
            <router-link to="/login">登入</router-link> |
            <router-link to="/register">註冊</router-link> |
            <router-link to="/borrow">借閱</router-link> |
            <router-link to="/return">還書</router-link>
        </nav>
        <router-view></router-view>
    </div>
    -->
</template>
<style scoped>/* scoped 代表 css 只作用在組件中 */

/* 頂部導覽列基本排版 */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f4f4f4;
}

.app-logo {
  font-size: 1.5rem;
  font-weight: bold;
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

</style>