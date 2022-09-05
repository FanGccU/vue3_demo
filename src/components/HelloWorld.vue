<template>
  <h1>{{ msg }}</h1>
  <h1>我的个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职务：{{ job.position }}</h2>
  <h2>薪资：{{ job.salary }}</h2>
  <h2>我的兴趣爱好为：{{ hobby }}</h2>

  <button @click="sayHello">介绍</button>
  <button @click="modifyInfo">修改信息</button>
  <button @click="deleteArray">删除数组最后下标</button>
  <div>-------------------------------------</div>
  <slot name="test1"></slot>
  <slot name="test2"></slot>
  <div>--------------------------------------</div>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  emits: ["hello"],
  setup(props, context) {
    // 信息打印
    console.log("props：", props,"context：",context);
    // 数据
    let name = ref("小明");
    let age = ref(18);
    let job = reactive({
      position: "JAVA软件开发工程师",
      salary: "20K",
    });
    let hobby = reactive(["打游戏", "画画", "睡觉"]);

    // 方法
    function sayHello() {
      alert(`我叫${name.value}，我${age.value}岁了，你好啊！！`);
    }
    function modifyInfo() {
      name.value = "李四";
      age.value = 20;
      job.position = "前端开发工程师";
      job.salary = "30K";
      hobby[0] = "跑步";
    }
    function deleteArray() {
      delete hobby[hobby.length - 1];
      delete job.salary;
    }

    function test() {
      context.emit("hello", 500);
    }

    // 输出
    return {
      name,
      age,
      sayHello,
      modifyInfo,
      job,
      hobby,
      deleteArray,
      test,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
