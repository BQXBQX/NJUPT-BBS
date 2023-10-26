<script setup>
import Welcome from "./views/welcome/welcome.vue";
import Login from "./views/login/login.vue";

</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="slide">
            <component :is="Component" />
        </transition>
    </router-view>

</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: all .3s ease;
}
.slide-enter-from, .slide-leave-to {
    transform: translateX(100%);
}
.slide-enter-to, .slide-leave-from {
    transform: translateX(0);
}
</style>
