import { createPinia } from "pinia";
import router from "../router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import type { App } from "vue";

const pinia = createPinia();
export function registerPlugins(app: App) {
  app.use(router).use(pinia);
}
