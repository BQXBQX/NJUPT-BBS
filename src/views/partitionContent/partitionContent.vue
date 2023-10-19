<template>
  <div class="partitionContentContainer">
      <post-top-nav :partitionMessage = 'routerPath'></post-top-nav>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import PostTopNav from "../../components/postTopNav.vue";

let routerPath = ref()
onMounted(()=>{
    const route = useRoute()
    //url解码
    routerPath.value = decodeURIComponent(route.path).split('/')[2]
})
</script>