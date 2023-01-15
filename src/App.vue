<template>
  <div class="container mx-auto px-4">
    <h1 class="text-center my-10 text-2xl sm: text-xl">
      Статистика втрат русні у війні {{ data }}
    </h1>
    <ul class="flex sm: w-full">
      <li class="flex-1 mr-2">
        <router-link
          active-class="text-white bg-blue-500 hover:bg-blue-700"
          class="text-center block border border-white rounded hover:border-gray-200 py-2 px-4"
          to="/"
          >Домашня</router-link
        >
      </li>
      <li class="flex-1 mr-2">
        <router-link
          active-class="text-white bg-blue-500 hover:bg-blue-700"
          class="text-center block border border-white rounded hover:border-gray-200 py-2 px-4"
          to="/humans"
          >Орки</router-link
        >
      </li>
      <li class="flex-1 mr-2">
        <router-link
          active-class="text-white bg-blue-500 hover:bg-blue-700"
          class="text-center block border border-white rounded hover:border-gray-200 py-2 px-4"
          to="/tanks"
          >Танки</router-link
        >
      </li>
      <li class="flex-1">
        <router-link
          active-class="text-white bg-blue-500 hover:bg-blue-700"
          class="text-center block border border-white rounded hover:border-gray-200 py-2 px-4"
          to="/combat"
          >Бойові машини</router-link
        >
      </li>
      <li class="flex-1">
        <router-link
          active-class="text-white bg-blue-500 hover:bg-blue-700"
          class="text-center block border border-white rounded hover:border-gray-200 py-2 px-4"
          to="/bpla"
          >БПЛА</router-link
        >
      </li>
      <!-- <li class="flex-1">
        <router-link
          active-class="text-white bg-blue-500 hover:bg-blue-700"
          class="text-center block border border-white rounded hover:border-gray-200 py-2 px-4"
          to="/test"
          >TEST</router-link
        >
      </li> -->
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    this.data = `на ${day}.0${month + 1}.${year}`;
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
