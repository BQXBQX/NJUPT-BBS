<template>
  <div class="uploadView">
      <div style="width:100% ;height: 100%">
          <swiper class="swiper" :modules="[EffectCube]" effect="Cube">
              <swiper-slide ref="takePhoto" v-bind="useSwiperSlide()"><take-photo-view></take-photo-view></swiper-slide>
              <swiper-slide ref="now" v-bind="useSwiperSlide"><now-view></now-view></swiper-slide>
              <swiper-slide ref="photo" v-bind="useSwiperSlide"><photo-view></photo-view></swiper-slide>
          </swiper>
      </div>
      <upload-view-bottom-nav></upload-view-bottom-nav>
  </div>
</template>
<script setup>

import UploadViewBottomNav from "../../components/uploadViewComponents/uploadViewBottomNav/uploadViewBottomNav.vue";
import UploadTopView from "../../components/uploadViewComponents/uploadViewTop/uploadViewTop.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import { EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import NowView from "../../components/uploadViewComponents/nowView/nowView.vue";
import PhotoView from "../../components/uploadViewComponents/photoView/photoView.vue";
import TakePhotoView from "../../components/uploadViewComponents/takePhotoView/takePhotoView.vue";
import { useSwiperSlide } from 'swiper/vue';

console.log(useSwiperSlide())
</script>
<style>
.uploadView{
    position: absolute;
    width: 100%;
    height: 100%;
}
.swiper{
    height: 100%;
}
</style>