<template>
  <div class="uploadView">
      <router-view></router-view>
      <upload-view-bottom-nav></upload-view-bottom-nav>
  </div>
</template>
<script setup>

import UploadViewBottomNav from "../../components/uploadViewComponents/uploadViewBottomNav/uploadViewBottomNav.vue";
</script>
<style>
.uploadView{
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>