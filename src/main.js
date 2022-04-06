import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import BaseIcon from "@/components/BaseIcon";

createApp(App)
  .component("BaseIcon", BaseIcon)
  .use(store)
  .use(router)
  .mount("#app");
