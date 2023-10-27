<!-- pageMessage -->
<script setup>
import { useSwiperSlide } from 'swiper/vue';
import {ref, watch} from "vue";

//这里通过defineProps，得到了父组件传来的数据
const props = defineProps(
    {
        pageNum:Number
    }
)


//这里调用了 useSwiperSlide
const swiperSlide = useSwiperSlide();

 //这里初始化了页面信息
let pageMessage = ref([
    {
        pageNumber:1,
        pageIsActive:false
    },
    {
        pageNumber:2,
        pageIsActive:false
    },
    {
        pageNumber:3,
        pageIsActive:false
    },
])


watch(swiperSlide, () => {
    if (swiperSlide.value.isActive) {
        // console.log(props.pageNum);
        pageMessage.value[props.pageNum-1] = {
            pageNumber:props.pageNum,
            pageIsActive:swiperSlide.value.isActive
        }
        console.log(pageMessage.value)
        // console.log("child emit")
        const messageString = JSON.stringify(pageMessage.value);
        localStorage.setItem("message",messageString)
    }
});
</script>