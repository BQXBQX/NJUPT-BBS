<template>
  <transition name="beforePage">
    <div
      class="nowBeforeViewContainer"
      v-if="isActive === true"
      @click="isActiveChangeFalse"
    >
      <div class="uploadViewTop" @click.stop="goBack">
        <svg
          t="1697859182295"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8678"
          width="200"
          height="200"
        >
          <path
            d="M886.784 746.496q29.696 30.72 43.52 56.32t-4.608 58.368q-4.096 6.144-11.264 14.848t-14.848 16.896-15.36 14.848-12.8 9.728q-25.6 15.36-60.416 8.192t-62.464-34.816l-43.008-43.008-57.344-57.344-67.584-67.584-73.728-73.728-131.072 131.072q-60.416 60.416-98.304 99.328-38.912 38.912-77.312 48.128t-68.096-17.408l-7.168-7.168-11.264-11.264-11.264-11.264q-6.144-6.144-7.168-8.192-11.264-14.336-13.312-29.184t2.56-29.184 13.824-27.648 20.48-24.576q9.216-8.192 32.768-30.72l55.296-57.344q33.792-32.768 75.264-73.728t86.528-86.016q-49.152-49.152-93.696-93.184t-79.872-78.848-57.856-56.832-27.648-27.136q-26.624-26.624-27.136-52.736t17.92-52.736q8.192-10.24 23.552-24.064t21.504-17.92q30.72-20.48 55.296-17.92t49.152 28.16l31.744 31.744q23.552 23.552 58.368 57.344t78.336 76.288 90.624 88.576q38.912-38.912 76.288-75.776t69.632-69.12 58.368-57.856 43.52-43.008q24.576-23.552 53.248-31.232t55.296 12.8q1.024 1.024 6.656 5.12t11.264 9.216 10.752 9.728 7.168 5.632q27.648 26.624 27.136 57.856t-27.136 57.856q-18.432 18.432-45.568 46.08t-60.416 60.416-70.144 69.632l-77.824 77.824q37.888 36.864 74.24 72.192t67.584 66.048 56.32 56.32 41.472 41.984z"
            p-id="8679"
            fill="#2c2c2c"
          ></path>
        </svg>
      </div>
      <div class="draftsButtonContainer" @click.stop="goBack">
        <button class="draftsButton">
          <svg
            t="1698455484900"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11678"
            width="200"
            height="200"
            style="height: 22px"
          >
            <path
              d="M1023.99808 582.976827a47.99991 47.99991 0 0 0-47.99991-47.99991h-119.999775V48.00183a47.99991 47.99991 0 0 0-47.99991-47.99991H411.007229l-0.319999 0.064a47.615911 47.615911 0 0 0-34.239936 14.015974L182.207658 208.321529a47.487911 47.487911 0 0 0-13.887974 34.751935c0 0.511999-0.256 0.959998-0.255999 1.407998 0 1.471997 0.703999 2.751995 0.831998 4.223992-0.192 1.535997-0.895998 2.815995-0.895998 4.287992v281.983471H47.99991a47.99991 47.99991 0 0 0-47.99991 47.99991c0 0.703999 0.383999 1.343997 0.383999 1.983996 0 0.703999-0.383999 1.343997-0.383999 2.047996v388.991271c0 26.49595 21.50396 47.99991 47.99991 47.99991h927.99826a47.99991 47.99991 0 0 0 47.99991-47.99991v-369.023308c0-4.223992-1.343997-8.063985-2.431995-12.031978 1.087998-3.903993 2.431995-7.679986 2.431995-11.967977z m-927.99826 47.99991h210.751605c31.359941 82.879845 110.847792 142.015734 204.735616 142.015734s173.311675-59.135889 204.735616-142.015734H927.99826V928.00018h-831.99844v-297.023443z m334.975372-434.431186H329.727382L430.271193 96.00174h0.767999v100.543811z m-166.975687 95.99982h214.015599a47.551911 47.551911 0 0 0 45.119915-33.663936 47.679911 47.679911 0 0 0 3.903993-18.879965V96.00174h233.023563v438.975177H632.126815c1.023998 6.207988 3.007994 12.031977 3.007994 18.495965a123.583768 123.583768 0 0 1-247.039537 0c0-6.527988 1.983996-12.287977 2.943995-18.495965H263.999505V292.545371z"
              fill="#040000"
              p-id="11679"
            ></path>
          </svg>
          <span style="font-size: 15px">草稿箱</span>
        </button>
      </div>
      <svg
        t="1697698307309"
        class="nowViewIcon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="8914"
      >
        <path
          d="M576.967111 554.894222C576.967111 227.84 849.550222 34.844444 1024 0v192.995556c-95.402667 29.496889-209.891556 179.598222-215.324444 343.125333H1024V739.555556c0 157.098667-127.345778 284.444444-284.444444 284.444444h-162.588445V554.894222zM0 554.894222C0 227.84 272.583111 34.844444 447.032889 0v192.995556c-95.402667 29.496889-209.891556 179.598222-215.324445 343.125333h212.593778V739.555556c0 157.098667-127.345778 284.444444-284.444444 284.444444H0V554.894222z"
          p-id="8915"
          fill="#cdcdcd"
        ></path>
      </svg>
      <span class="nowViewSpanTitle">点这里， 说说想法</span>
      <span class="nowViewSpanMain">求大家推荐一个小众宝藏旅游地</span>
      <div class="background"></div>
    </div>
  </transition>
  <transition name="afterPage">
    <div class="nowAfterViewContainer" v-if="isActive === false">
      <div class="uploadViewTop" @click="isActiveChange">
        <svg
          t="1698454766725"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8788"
          width="200"
          height="200"
          style="height: 30px; width: 30px; margin-top: 5px"
        >
          <path
            d="M378.24 512l418.88 418.88L704 1024 192 512l512-512 93.12 93.12z"
            fill="#2c2c2c"
            p-id="8789"
          ></path>
        </svg>
      </div>
      <div class="backgroundAfter"></div>
      <textarea
        v-model="postText"
        placeholder="说说你的想法吧"
        class="afterInput"
      ></textarea>
    </div>
  </transition>
  <transition name="saveDraftSlide">
    <div
      v-if="saveDrafts"
      class="isActiveSaveDrafts"
      @click="saveDrafts = false"
    >
      <div class="saveDraftsContent">
        <div
          style="
            background-color: white;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px 15px 0 0;
          "
        >
          <span style="font-size: 18px; color: gray">要退出文本输入吗？</span>
        </div>
        <div
          style="
            background-color: white;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
          @click.stop="saveBack"
        >
          <span style="font-size: 20px; color: black">保存并退出</span>
        </div>
        <div
          style="
            background-color: white;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0 0 15px 15px;
          "
          @click.stop="
            saveDrafts = false;
            isActive = true;
            postText = '';
          "
        >
          <span style="font-size: 20px; color: black">直接退出</span>
        </div>
        <div
          style="
            background-color: white;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            margin-top: 4px;
          "
        >
          <span style="font-size: 22px; color: black">取消</span>
        </div>
      </div>
    </div>
  </transition>
  <transition>
    <postDrafts></postDrafts>
  </transition>
</template>
<script setup>
import { ref } from "vue";
import router from "../../../router";
import postDrafts from "../postDrafts/postDrafts.vue";

let postText = ref("");

let saveDrafts = ref(false);

function isActiveChangeFalse() {
  isActive.value = !isActive.value;
}

let isActive = ref(true);
function isActiveChange() {
  if (postText.value === "") {
    isActive.value = !isActive.value;
    saveDrafts.value = false;
    console.log(isActive.value);
    console.log(saveDrafts.value);
  } else {
    saveDrafts.value = true;
    console.log(saveDrafts.value);
  }
}

function goBack() {
  router.go(-1);
}

let postDraftsStore = ref([]);

function saveBack() {
  saveDrafts.value = false;
  isActive.value = true;
  postDraftsStore.value.push(postText.value);
  console.log(postDraftsStore.value);
  localStorage.setItem("postDrafts", postDraftsStore.value);
  postText.value = null;
}
</script>
<style>
@import "../nowView/nowView.css";
</style>
