<script setup>
    
    import NavComp from "./Nav.vue";
    import MainComp from "./Main.vue";
    import { ref } from "vue";
    let subtitle = ref("副標題");
    let updateSubtitle = function () {
        subtitle.value = "新的副標題";
    };
    let cookie = document.cookie;
    console.log(cookie);

</script>
<template>
    
    <NavComp 
        title="標題"
        v-bind:subtitle="subtitle"
    ></NavComp>
    <!-- <div>{{ subtitle }}</div> -->
    <MainComp 
        clr="white"
        bgc="black"
        @update="updateSubtitle"
    ></MainComp>
    
</template>
<style scoped>/* scoped 代表 css 只作用在組件中 */



</style>