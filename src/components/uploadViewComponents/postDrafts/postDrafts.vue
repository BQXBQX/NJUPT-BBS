<template>
  <div class="draftsContainer">
    <div class="draftsTop">
      <svg
        t="1698454766725"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="8788"
        width="200"
        height="200"
        style="
          height: 25px;
          width: 25px;
          margin-top: 5px;
          position: absolute;
          left: 0;
          margin: 10px;
        "
      >
        <path
          d="M378.24 512l418.88 418.88L704 1024 192 512l512-512 93.12 93.12z"
          fill="#2c2c2c"
          p-id="8789"
        ></path>
      </svg>
      <span style="color: black; font-size: 20px">草稿箱</span>
    </div>
    <div class="draftsContent"></div>
  </div>
</template>

<script setup></script>
<style>
.draftsTop {
  height: 60px;
  width: 100%;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.draftsContainer {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: white;
}
</style>
