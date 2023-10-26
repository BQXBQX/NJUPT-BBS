<template>
  <div class="concernButtonContainer" @click="focusButton">
    <div class="concernNotButton" v-if="isFocus === false">关注 TA</div>
    <div class="concernButton" v-if="isFocus === true">已关注</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isFocus = ref(false);

function focusButton() {
  isFocus.value = !isFocus.value;
  console.log(isFocus.value);
}
</script>
<style>
@import "../focusButton/focusButton.css";
</style>
