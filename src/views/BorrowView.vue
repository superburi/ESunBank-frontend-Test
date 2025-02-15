<template>
  <div class="borrow-container">
    <h2>借閱書籍</h2>
    <div class="book-detail">
      <h3>書名：{{ bookDetail.name }}</h3>
      <p>ISBN：{{ bookDetail.isbn }}</p>
      <p>作者：{{ bookDetail.author }}</p>
      <p>簡介：{{ bookDetail.introduction }}</p>
      <p>狀態：{{ statusText }}</p>
    </div>

    <button
      :disabled="!isBorrowable" 
      @click="borrowBook"
      class="borrow-btn"
    >
      借閱
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BorrowView',
  data() {
    return {
      bookDetail: {},
    }
  },
  computed: {
    // 依據數字狀態 return 對應中文
    statusText() {
      const statusMap = {
        0: '可借閱',
        1: '已借閱',
        2: '整理中',
        3: '遺失',
        4: '損毀',
        5: '廢棄'
      }
      return statusMap[this.bookDetail.status] || '未知狀態'
    },
    // 狀態=0（可借閱）才可按借閱
    isBorrowable() {
      return this.bookDetail.status === 0
    }
  },
  mounted() {
    // 取得路由參數
    const isbn = this.$route.params.isbn
    console.log("iiiiiiiiii = " + isbn);
    this.fetchBookDetail(isbn)
  },
  methods: {
    async fetchBookDetail(isbn) {
      try {
        const response = await axios.get(`http://localhost:8080/books/${isbn}`)
        this.bookDetail = response.data
      } catch (error) {
        console.error('取得書本詳細失敗：', error)
      }
    },
    async borrowBook() {
      try {
        // 這裡假設後端有一個借閱 API，例如 POST /books/:bookId/borrow
        // 你可以依照實際後端設計調整
        const response = await axios.post(
          `http://localhost:8080/books/${this.bookDetail.isbn}/borrow`,
          {},
          {
            withCredentials: true,
          }
        )
        if (response.status === 201) {
          // 借閱成功，跳轉到「借書成功」頁面
          // 並把必要資訊 (書名、借閱時間) 一起帶到那個頁面
          // 帶參數的做法： query 或 params 都可以
          const borrowTime = response.data || new Date().toISOString()

          this.$router.push({
            name: 'borrow-success',
            query: {
              bookName: this.bookDetail.name,
              isbn: this.bookDetail.isbn,
              borrowTime
            }
          })

        } else {

          alert("發生未知情況，請電洽工作人員")

        }

      } catch (error) {
        // === 錯誤 (4xx / 5xx) 區域 ===
        // 如果是 401，表示未登入或 token 過期
        if ( error.response && 
                ( error.response.status === 401 || error.response.status === 403 ) ) {
          // 後端可能在 response.body 傳回字串，例如「請重新登入」
          const msg = error.response.data || '請重新登入'
          alert(msg)
          // 跳轉到登入頁面
          this.$router.push('/login')
        } else {
          // 其他錯誤，例如 400, 404, 500...
          console.error('借閱失敗：', error)
          alert('借閱失敗，請電洽工作人員')
        }
      }
    },
  },
}
</script>

<style scoped>
.borrow-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top: 5rem;
}

.book-detail {
  border: 1px solid #ccc;
  padding: 1rem;
  width: 50%;
  text-align: center;
  background-color: #fafafa;
  border-radius: 4px;
}

.borrow-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;
}
.borrow-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.borrow-btn:hover:not(:disabled) {
  background-color: #555;
}
</style>
