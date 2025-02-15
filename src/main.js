// 從 Vue 套件載入 createApp 函式
import { createApp } from "vue";

import { createPinia } from 'pinia'

// 載入根組件
import App from "./App.vue";

// 載入 router
import router from "./router";

// 用 根組件 建立 Vue.app 物件
const app = createApp(App);

// router
app.use(router);

const pinia = createPinia()
app.use(pinia)

// 掛載到 html 標籤底下
app.mount("div#app");