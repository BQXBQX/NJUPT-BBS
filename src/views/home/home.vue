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
import TopNav from "../../components/showViewComponents/homeView/topHomeNav.vue";
import PostItem from "../../components/common/postItem/postItem.vue";
</script>
<style>
@import "./home.css";
</style>
