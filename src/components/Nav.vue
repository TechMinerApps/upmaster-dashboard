<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
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
