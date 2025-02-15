<template>
    <div>
      <h1>借閱書籍</h1>
      <form @submit.prevent="borrowBook">
        <div>
          <label>書本 ID：</label>
          <input v-model="bookId" required />
        </div>
        <button type="submit">借閱</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BorrowView',
    data() {
      return {
        bookId: ''
      }
    },
    methods: {
      borrowBook() {
        // 呼叫 API，傳 bookId 與使用者資訊給後端做借閱
        console.log('嘗試借閱書籍', this.bookId)
      }
    }
  }
  </script>
  