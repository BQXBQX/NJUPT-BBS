<template>
  <div class="partitionContentContainer">
    <post-top-nav
      :partitionMessage="routerPath"
      style="z-index: 5"
    ></post-top-nav>
    <div class="partitionContentMessage">
      <post-item></post-item>
      <post-item></post-item>
      <post-item></post-item>
      <post-item></post-item>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import PostTopNav from "../../components/post/postTopNav/postTopNav.vue";
import PostItem from "../../components/common/postItem/postItem.vue";

let routerPath = ref();
onMounted(() => {
  const route = useRoute();
  //url解码
  routerPath.value = decodeURIComponent(route.path).split("/")[2];
});
</script>
<style scoped>
@import "../partitionContent/partitionContent.css";
</style>
