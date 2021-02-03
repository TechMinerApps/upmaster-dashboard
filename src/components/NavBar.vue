<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="green" size="35"></v-avatar>
      <div>
        <v-tabs>
          <v-tab v-for="(item, index) in items" :key="index" :to="item.to" text>
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </div>
      <v-spacer />

      <v-menu offset-y bottom left origin="top right">
        <template v-slot:activator="{ on }">
          <v-avatar class="cyan" size="35" v-on="on"></v-avatar>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <v-list-item-group>
            <v-list-item v-for="(item, index) in userSettings" :key="index">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
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
