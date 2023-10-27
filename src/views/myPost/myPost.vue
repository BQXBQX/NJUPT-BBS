<template>
  <div class="myPostContainer">
    <div class="topNav">
      <PostTopNav :partitionMessage="title"></PostTopNav>
    </div>
    <div class="myPostContent">
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostTopNav from "../../components/post/postTopNav/postTopNav.vue";
import PostItem from "../../components/common/postItem/postItem.vue";

let title = ref("my post");
</script>

<style scoped>
@import "./myPost.css";
</style>
