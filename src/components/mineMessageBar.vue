<template>
<div class="mineMessageBarContainer">
    <span class="text" style="
    font-size: 20px;
    display: flex;
    align-content: center;
    flex-wrap: wrap;">{{message.barMessage}}</span>
    <img :src="null" alt="avatar" style="height: 50px;width: 50px;border-radius: 5px" v-if="message.picture === null">
</div>
</template>
<script setup>
const props = defineProps({
    message:Object
})
function test(){
    console.log(props.message)
}
</script>
<style>
.mineMessageBarContainer{
    box-sizing: border-box;
    padding: 10px;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: space-between;
}
</style>