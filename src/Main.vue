<script setup>
    import { ref } from "vue";
    let text = ref("主要的網站內容");
    let change = function () {
        text.value = "新的網站內容";
    };
    defineProps(["clr", "bgc"]);

    let emit = defineEmits(["update"]);

    let updateParentSubtitle = function () {
        emit("update");
    }

</script>
<template>
    <main v-bind:style="{color:clr, backgroundColor:bgc}">
        <div v-on:click="change">{{ text }}</div>
        <!-- <button v-on:click="$emit('update')">改變副標題</button> -->
        <button v-on:click="updateParentSubtitle">改變副標題</button>
    </main>
</template>
<style scoped>
 main {
    padding: 10px;
    background-color: #dddddd;
 }
</style>