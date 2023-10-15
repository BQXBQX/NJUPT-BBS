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
.messageBarItemContainer{
    box-shadow: 0 0 2px #e6e6e6;
    height: 60px;
    background-color: white;
}
.text{
    color: black;
    font-family: inherit;
}
.barText{
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 20px;
}
.barMessage{
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.leftBar{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.rightBar{
    height: 25px;
    width: 40px;
    background-color: #2D328E;
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    /* 设置透明度为50% */
    opacity: 0.5;
}
</style>