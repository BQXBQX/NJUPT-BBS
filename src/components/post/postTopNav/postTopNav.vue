<template>
  <div class="postTopNavContainer">
      <div class="iconContent">
          <svg @click="toBack" t="1697421499530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7516" width="200" height="200"><path d="M659.748571 245.272381l-51.687619-51.687619-318.439619 318.585905 318.415238 318.268952 51.712-51.736381-266.703238-266.556952z" p-id="7517" fill="#8a8a8a"></path></svg>
      </div>
      <div class="postPartition">
          <div class="iconContainer">
              <svg t="1697686819414" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9356" width="200" height="200"><path d="M320 192h512l-192 256 192 256H320V192z" fill="#EF5151" p-id="9357"></path><path d="M832 192l-192 256 192 256H320V192h512m0-64H320c-38.4 0-64 25.6-64 64v512c0 38.4 25.6 64 64 64h512c25.6 0 44.8-12.8 57.6-38.4 12.8-19.2 6.4-44.8-6.4-64L723.2 448l166.4-217.6c12.8-19.2 19.2-44.8 6.4-64-19.2-25.6-38.4-38.4-64-38.4z m0 128z" p-id="9358"></path><path d="M256 128h64v800H256z" fill="#FAFAFA" p-id="9359"></path><path d="M320 128v800H256V128h64m0-64H256c-32 0-64 25.6-64 64v800c0 32 25.6 64 64 64h64c32 0 64-25.6 64-64V128c0-38.4-32-64-64-64z" p-id="9360"></path></svg>
          </div>
          <span style="font-size: 20px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          color: black;
          align-content: center;">{{ partitionMessage }}</span>
      </div>
      <div class="iconContent">
          <svg t="1697421669729" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7934" width="200" height="200"><path d="M354.986667 219.428571v73.142858H195.047619v536.380952h585.142857V548.571429h73.142857V828.952381a73.142857 73.142857 0 0 1-73.142857 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857V292.571429a73.142857 73.142857 0 0 1 73.142857-73.142858h159.939048z m383.829333-100.473904l172.397714 172.373333-181.00419 181.028571-51.736381-51.712L757.784381 341.333333H670.47619c-139.068952 0-252.245333 110.884571-255.902476 249.07581L414.47619 597.333333v97.52381h-73.142857v-97.52381C341.333333 415.548952 488.69181 268.190476 670.47619 268.190476h114.127239l-97.499429-97.523809 51.712-51.712z" p-id="7935" fill="#8a8a8a"></path></svg>
      </div>
  </div>
</template>
<script setup>
import router from "../../../router/index.js";

const props = defineProps({
    partitionMessage:{
        type:String,
        default: 'hello world!'
    }
})
function toBack(){
    router.go(-1);
}
</script>
<style>
.postTopNavContainer{
    background-color: white;
    /*box-shadow: 0 0 10px gray;*/
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.iconContent{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
.postPartition{
    gap: 8px;
    padding: 2px 15px;
    border-radius: 15px;
    margin: 10px;
    background-color: #D6EAF8;
    display: flex;
}
.icon{
    height: 32px;
    width: 32px;
}

</style>