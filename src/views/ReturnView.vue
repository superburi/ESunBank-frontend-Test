<template>
    <div>
      <h1>還書籍</h1>
      <form @submit.prevent="returnBook">
        <div>
          <label>書本 ID：</label>
          <input v-model="bookId" required />
        </div>
        <button type="submit">還書</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReturnView',
    data() {
      return {
        bookId: ''
      }
    },
    methods: {
      returnBook() {
        // 呼叫 API，傳 bookId 給後端做還書
        console.log('嘗試還書', this.bookId)
      }
    }
  }
  </script>
  