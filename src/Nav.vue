<script setup>
    defineProps(["title", "subtitle"]);
</script>
<template>
    <nav>
        <div>{{ title }}</div>
        <div>{{ subtitle }}</div>
    </nav>
</template>
<style scoped>
    nav {
        padding: 10px;
    }
</style>