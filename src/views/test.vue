<template>
</template>
<script setup>
import {ref} from "vue";

let goodIsActive = ref(false);

function trueGoodIsActive(){
    goodIsActive.value = true
}
function falseGoodIsAction(){
    goodIsActive.value = false
}
</script>
<style>

</style>

