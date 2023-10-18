<template>
    <div style="height: 800px">
        <h1>{{ message }}</h1>
        <button @click="toggleCollapse">Toggle Collapse</button>
        <div v-if="isCollapsed === true">
            <span>hello world!</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 使用 ref 创建响应式数据
const isCollapsed = ref(true);
const message = ref('Hello, World!');

// 定义点击按钮时切换折叠状态的方法
const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
};
</script>

<style>
.content {
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;
}

.content p {
    margin: 0;
    padding: 10px;
}
</style>
