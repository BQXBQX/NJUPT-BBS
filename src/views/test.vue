<template>
</template>
<script setup>
import {ref} from "vue";

let isShow = ref(false)

function showTrueChange(){
    isShow.value = true
}

function showFalseChane(){
    isShow.value = false
}
</script>
<style>

</style>
