<template>
    <div class="messageBarItemContainer">
        <div class="barMessage">
            <div class="leftBar">
                <svg t="1697297182157" class="icon" viewBox="0 0 1024 1024"><path :d="message.messageBarSvgPath"  :fill="message.messageBarSvgFill"></path></svg>
                <span class="text barText">{{message.messageBarText}}</span>
            </div>
            <div class="rightBar">
                {{message.messageBarNum}}
            </div>
        </div>
    </div>
</template>
<script setup>
import {onMounted} from "vue";

const props = defineProps({
    message:Object,
})

function test(){
    console.log(props.message)
}
</script>
<style>
@import "./messageBar.css";
</style>