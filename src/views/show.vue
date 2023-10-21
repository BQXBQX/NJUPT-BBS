<template>
<!--    <router-view v-slot="{ Component }">-->
<!--        <transition name="fade">-->
<!--            <component :is="Component" />-->
<!--        </transition>-->
<!--    </router-view>-->
    <router-view></router-view>
    <BottomNav></BottomNav>
</template>
<script setup>
import BottomNav from "../components/bottomNav.vue";

</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
}
.fade-enter-from, .fade-leave-to {
    transform: translateX(100%);
}
.fade-enter-to, .fade-leave-from {
    transform: translateX(0);
}
</style>