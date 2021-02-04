<template>
  <v-app-bar app color="white">
    <v-container class="py-0 fill-height">
      <router-link :to="{ name: 'home' }">
        <v-app-bar-title>
          <span class="green--text text--darken-2">Up</span>
          <span class="green--text text--lighten-1">Master</span>
        </v-app-bar-title>
      </router-link>

      <nav>
        <v-btn
          v-for="(item, index) in items"
          :key="`navbar-nav-${index}`"
          :to="item.to"
          plain
        >
          {{ item.title }}
        </v-btn>
      </nav>

      <v-spacer />

      <v-menu offset-y bottom left origin="top right">
        <template v-slot:activator="{ on }">
          <v-btn icon plain v-on="on">
            <v-avatar class="cyan" size="35"></v-avatar>
          </v-btn>
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
            <v-list-item
              v-for="(item, index) in userSettings"
              :key="`user-settings-${index}`"
              :to="item.to"
              exact
            >
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
    items: [
      {
        title: "Endpoints",
        to: {
          name: "endpoints"
        },
        icon: "mdi-camera-control"
      },
      {
        title: "Users",
        to: {
          name: "users"
        },
        icon: "mdi-lock"
      }
    ],
    user: {
      name: "Steven",
      email: "Steven@example.com"
    },
    userSettings: [
      {
        title: "Settings",
        to: {
          name: "settings"
        },
        icon: "mdi-account"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
nav {
  margin-left: 2rem;
}
</style>
