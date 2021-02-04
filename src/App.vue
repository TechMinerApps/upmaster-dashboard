<template>
  <v-app>
    <nav-drawer />
    <nav-bar />
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NavDrawer from "./components/NavDrawer.vue";
export default {
  components: { NavBar, NavDrawer },
  name: "App",
  data: () => ({})
};
</script>
