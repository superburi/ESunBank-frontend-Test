<template>
    <div>
      <h1>所有書本資料</h1>
      <!-- 替換成實際書本資料的清單 -->
      <ul>
        <li v-for="(book, index) in books" :key="index">
          {{ book.title }} - {{ book.author }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    data() {
      return {
        books: [
          { title: 'Book A', author: 'Author A' },
          { title: 'Book B', author: 'Author B' },
        ],
      }
    },
    mounted() {
      // 一般會在這裡呼叫後端 API，拿到書籍清單後再設定到 books
    },
  }
  </script>
  
  <style scoped>
  /* 局部樣式 */
  </style>
  