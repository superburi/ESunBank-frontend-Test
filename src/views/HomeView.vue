<template>
   <div class="home-container">
    <h2>所有書本資料</h2>
    <div class="books-wrapper">
      <div
        class="book-item"
        v-for="(book, index) in books"
        :key="book.id || index"
      >
        <h3>{{ book.title }}</h3>
        <p>{{ book.author }}</p>
        <!-- 你也可以顯示其他資訊，例如出版日期、簡介等等 -->
      </div>
    </div>
  </div>
  </template>
  
  <script>
 import axios from 'axios'

export default {
  name: 'HomeView',
  data() {
    return {
      books: [],
    }
  },
  mounted() {
    this.fetchBooks()
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:8080/books')
        // 假設後端直接回傳陣列 [{ id: 1, title: '...', author: '...' }, ...]
        this.books = response.data
        console.log(books);
      } catch (error) {
        console.error('取得書籍失敗：', error)
      }
    },
  },
}
  </script>
  
  <style scoped>
  .home-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平置中 */
  margin-top: 2rem;
}

.books-wrapper {
  display: flex;
  flex-direction: column; /* 一排一排垂直列出 */
  align-items: center;
  width: 50%; /* 調整容器寬度，看你想要多寬 */
}

.book-item {
  width: 100%;
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 0.5rem 0;
  text-align: center; /* 文字置中 */
  border-radius: 4px;
  background-color: #fafafa;
}
  </style>
  