<template>
    <div class="success-container">
      <h2>借閱成功！</h2>
      <div class="detail-box">
        <p>書名：{{ bookName }}</p>
        <p>借閱時間：{{ borrowTime }}</p>
        <p>借閱成功！</p>
      </div>
      <button @click="goHome" class="home-btn">回首頁</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BorrowSuccessView',
    computed: {
      bookName() {
        return this.$route.query.bookName || '未知書名'
      },
      borrowTime() {
        return this.$route.query.borrowTime || '未知時間'
      }
    },
    methods: {
      goHome() {
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  .success-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }
  
  .detail-box {
    border: 1px solid #ccc;
    width: 300px;
    padding: 1rem;
    text-align: center;
    background-color: #fafafa;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  .home-btn {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s;
  }
  .home-btn:hover {
    background-color: #555;
  }
  </style>
  