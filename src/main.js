import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Global styles
import "@/assets/styles.scss";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// FontAwesome
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).use(router).mount("#app");
