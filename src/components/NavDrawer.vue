<template>
  <v-navigation-drawer app v-model="navbarStatus">
    <v-list-item class="mt-5">
      <v-avatar class="cyan"></v-avatar>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{ user.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Model, Vue } from "vue-property-decorator";

@Component
export default class NavDrawer extends Vue {
  @Model("set-navbar") isOpened!: boolean;

  get navbarStatus() {
    return this.isOpened;
  }

  set navbarStatus(value: boolean) {
    this.$emit("set-navbar", value);
  }

  private appTitle = "Uptime Master";
  private items: Array<object> = [
    {
      title: "Endpoints",
      to: "/endpoints",
      icon: "mdi-camera-control"
    },
    {
      title: "Status pages",
      to: "/statuspages",
      icon: "mdi-blur"
    },
    {
      title: "User Management",
      to: "/usermanage",
      icon: "mdi-lock"
    }
  ];
  private user = {
    name: "Steven",
    email: "Steven@example.com"
  };

  private userSettings: Array<object> = [
    { title: "My Profile", to: "/profile", icon: "mdi-account" },
    { title: "My setting", to: "/setting", icon: "mdi-wrench" }
  ];
}
</script>

<style scoped></style>
