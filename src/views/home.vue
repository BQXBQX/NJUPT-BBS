<template>
    <TopNav></TopNav>
    <PostItem></PostItem>
    <PostItem></PostItem>
    <PostItem></PostItem>
    <BottomNav></BottomNav>
</template>
<script setup>
import BottomNav from "../components/bottomNav.vue";
import TopNav from "../components/TopNav.vue";
import PostItem from "../components/postItem.vue";
</script>
<style>
.icon{
    color: #2D328E;
    height: 40px;
    width: 40px;
}
</style>