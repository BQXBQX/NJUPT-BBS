<template>
    <div class="home">
        <TopNav></TopNav>
        <div class="homeContent">
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
        </div>
    </div>
</template>
<script setup>
import BottomNav from "../components/bottomNav.vue";
import TopNav from "../components/TopNav.vue";
import PostItem from "../components/postItem.vue";
</script>
<style>
.home{
    position: relative;
    height: 100%;
    width: 100%;
}
.icon{
    color: #2D328E;
    height: 40px;
    width: 40px;
}
.homeContent {
    overflow-y: scroll;
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 50px;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 84px;
}
</style>