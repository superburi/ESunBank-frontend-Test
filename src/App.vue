<script setup>
    
    import { ref } from "vue";
    

</script>
<template>
    
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
    
</template>
<style scoped>/* scoped 代表 css 只作用在組件中 */



</style>