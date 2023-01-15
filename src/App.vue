<template>
  <div class="container mx-auto">
    <h1 class="text-center my-6 text-2xl">Статистика втрат русні у війні</h1>
    <ul class="flex w-2/4 mx-auto">
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
      <li class="flex-1 mr-2">
        <router-link
          active-class="text-white bg-blue-500 hover:bg-blue-700"
          class="text-center block border border-white rounded hover:border-gray-200 py-2 px-4"
          to="/combat"
          >Бойові машини</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
}
</style>
