<template>
  <!-- Vue3中模板结构中可以没有根标签 -->
  <HelloWorld @hello="showHelloMsg" msg="Vue3 Go！！！">  
    <template v-slot:test1>
      <div>
        <h1>test1</h1>
      </div>
    </template>
    <template v-slot:test2>
      <div>
        <h1>test2</h1>
      </div>
    </template>
  </HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    function showHelloMsg(value){
      alert(`你好啊，你触发了hello事件，我收到了参数是：${value}`);
    }
    return {
      showHelloMsg
    }
  }
};
</script>

<style></style>
