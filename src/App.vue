<template>
  <v-app>
    <nav-drawer />
    <nav-bar />
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "./components/NavBar.vue";
import NavDrawer from "./components/NavDrawer.vue";

@Component({
  components: { NavBar, NavDrawer }
})
export default class App extends Vue {}
</script>
