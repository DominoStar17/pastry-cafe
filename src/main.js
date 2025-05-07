import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/assets/styles.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);
app.use(router).mount("#app");

// Auto‐close the sidebar & backdrop on every route change
import { Offcanvas } from "bootstrap";

export default {
  name: "AppHeader",
  data() {
    return {
      sidebar: null,
    };
  },
  mounted() {
    this.sidebar = Offcanvas.getOrCreateInstance(
      document.getElementById("sidebar")
    );
  },
  methods: {
    toggleSidebar() {
      this.sidebar.toggle();
    },
    closeSidebar() {
      this.sidebar.hide();
    },
  },
};
