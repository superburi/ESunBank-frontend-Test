<template>
   <div class="home-container">
    <h2>所有書本資料</h2>
    <div class="books-wrapper">
      <div
        class="book-item"
        v-for="(book, index) in books"
        :key="book.id || index"
        @click="goToBorrow(book.isbn)"
      >
        <h3>書名 : {{ book.name }}</h3>
        <p>作者 : {{ book.author }}</p>
        <p>簡介 : {{ book.introduction }}</p>
        <button
          v-if="loanedBooks.includes(book.isbn)"
          @click.stop="returnBook(book.isbn)"
        >
          還書
        </button>
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
        loanedBooks: [],
      }
    },
    mounted() {
      this.fetchBooks()
      this.fetchUserInfo()
    },
    methods: {
      async fetchBooks() {
        try {
          const response = await axios.get('http://localhost:8080/books')
          // 假設後端直接回傳陣列 [{ id: 1, title: '...', author: '...' }, ...]
          this.books = response.data
          
        } catch (error) {
          console.error('取得書籍失敗：', error)
        }
      },

      goToBorrow(isbn) {
        // 動態路由帶上 isbn
        this.$router.push(`/borrow/${isbn}`)
      },
      async fetchUserInfo()  {
      try {
          const response = await axios.get('http://localhost:8080/auth/me', {
            withCredentials: true
          })
          // 後端回傳 { user_id:3, user_name:'vicky', loanedBooks:['19700821'], ... }
          // 把 loanedBooks 存起來
          this.loanedBooks = response.data.loanedBooks || []
        } catch (error) {
          console.error('未登入或 JWT 失效', error)
          loanedBooks.value = []
        }
      }

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
  