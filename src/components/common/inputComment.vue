<template>
    <div class="inputContainer">
        <div class="oldContainer">
            <div style="height: 50px;width: 25px;background-color: #e6e6e6;border-radius:25px 0 0 25px"></div>
            <input type="text" style="background-color: #e6e6e6;height: 50px;width: 80%;box-sizing: border-box;" v-on:click="showNewInput"  placeholder="说点什么吧...">
            <div style="height: 50px;width: 25px;background-color: #e6e6e6;border-radius:0 25px 25px 0"></div>
        </div>
    </div>
    <transition name="slide-up">
        <div class="newInputContainer" v-if="isNewInputVisible" v-show="isVisible" >
            <label v-if="isOverlayVisible" for="overlay">
                <svg t="1697501732750" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7516" style="height: 32px;width: 32px"><path d="M512.146286 619.52L245.296762 352.792381 193.584762 404.48l318.585905 318.415238 318.268952-318.415238-51.736381-51.687619z" p-id="7517" fill="#8a8a8a"></path></svg>
            </label>
            <button  id="overlay" v-on:click="hideNewInput"></button>
            <div class="newInput" id="new-input-container">
                <div style="height: 50px;width: 25px;background-color: #e6e6e6;border-radius:25px 0 0 25px"></div>
                <input type="text" v-on:click.stop placeholder="新的输入框" style="background-color: #e6e6e6;height: 50px;width: 80%;box-sizing: border-box;" ref="newInput">
                <label class="pictureLabel" for="file">
                    <svg t="1697503533023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8702" width="200" height="200"><path d="M819.2 96H204.8c-59.733333 0-108.8 49.066667-108.8 108.8v616.533333c0 59.733333 49.066667 108.8 108.8 108.8h616.533333c59.733333 0 108.8-49.066667 108.8-108.8V204.8c-2.133333-59.733333-51.2-108.8-110.933333-108.8zM160 819.2V204.8c0-23.466667 19.2-44.8 44.8-44.8h616.533333c23.466667 0 44.8 19.2 44.8 44.8v388.266667l-125.866666-125.866667c-27.733333-27.733333-76.8-27.733333-104.533334 0l-390.4 384c-4.266667 4.266667-6.4 8.533333-6.4 12.8H204.8c-25.6 0-44.8-19.2-44.8-44.8z m659.2 44.8H324.266667l354.133333-354.133333c2.133333-2.133333 6.4-2.133333 8.533333-2.133334s4.266667 0 8.533334 2.133334l160 160c4.266667 4.266667 8.533333 6.4 12.8 6.4v142.933333c-4.266667 25.6-23.466667 44.8-49.066667 44.8z" fill="#8a8a8a" p-id="8703"></path><path d="M375.466667 482.133333c59.733333 0 106.666667-46.933333 106.666666-106.666666s-46.933333-106.666667-106.666666-106.666667-106.666667 46.933333-106.666667 106.666667 49.066667 106.666667 106.666667 106.666666z m0-149.333333c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666-42.666667-19.2-42.666667-42.666666 19.2-42.666667 42.666667-42.666667z" fill="#8a8a8a" p-id="8704"></path></svg>
                </label>
                <div style="height: 50px;width: 25px;background-color: #e6e6e6;border-radius:0 25px 25px 0"></div>
                <input type="file" name="filePicture" id="file" style="display: none">
            </div>
            <button type="submit" style="border-radius: 25px">submit</button>
        </div>
    </transition>
</template>

<script setup>
import {ref, watch} from 'vue';


const isOverlayVisible = ref(false);
const isNewInputVisible = ref(false);
const newInput = ref(null);
let isVisible = ref(false)

function showNewInput() {
    isOverlayVisible.value = true;
    isNewInputVisible.value = true;
    setTimeout(() => {
        newInput.value.focus();
    }, 0);
}

// watch(isNewInputVisible, (newValue, oldValue) => {
//     setTimeout(() => {
//         isVisible.value = true;
//     }, 0);
// });
function hideNewInput() {
    isOverlayVisible.value = false;
    isNewInputVisible.value = false;
}
</script>

<style>
.pictureLabel{
    background-color: #e6e6e6;
}
.newInput{
    display: flex;
    justify-content: center;
}
.oldContainer{
    display: flex;
    margin: 0;
    gap: 0px;
    flex-direction: row;
}
label{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.inputContainer {
    width: fit-content;
    height: fit-content;
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
}
input{
    height: 50px;
    border-radius: 0px;
    border: 0px solid;
}
#overlay {
    display: none;
}
.newInputContainer{
    background-color: white;
    box-sizing: border-box;
    padding: 0 5vw;
    height: 80px;
    box-shadow: 0 0 1000px gray;
    width: 100%;
    position: fixed;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    z-index: 100;
    left: 0;
}
#new-input-container {
    width: 60%;
}
.slide-up-leave-active {
    transition: all 0.3s;
}
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.slide-up-enter-to {
    animation: slide-up 0.3s forwards;
}
</style>