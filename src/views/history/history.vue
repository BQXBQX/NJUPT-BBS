<template>
    <div class="historyContainer">
        <postTopNav></postTopNav>
        this is the history
    </div>
</template>

<script setup>
import postTopNav from '../../components/post/postTopNav/postTopNav.vue';
</script>

<style scoped>
.historyContainer{
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}
</style>