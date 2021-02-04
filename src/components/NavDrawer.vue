<template>
  <v-navigation-drawer app>
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

    <v-divider></v-divider>

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
    <!-- <template v-slot:append>
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar class="mr-10" color="green" size="35"></v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ appTitle }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template> -->
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    appTitle: "Uptime Master",
    items: [
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
    ],
    user: {
      name: "Steven",
      email: "Steven@example.com"
    },
    userSettings: [
      { title: "My Profile", to: "/profile", icon: "mdi-account" },
      { title: "My setting", to: "/setting", icon: "mdi-wrench" }
    ]
  })
};
</script>

<style scoped></style>
