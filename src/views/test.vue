<template>
    <swiper :modules="[EffectFade]" effect="fade">
        <swiper-slide>
            <div style="width: 100%;
            height: 70px;
            background-color: #1afa29;"></div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
    </swiper>
</template>
<script>
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            EffectFade,
        };
    },
};
</script>