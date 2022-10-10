import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import context from "./plugins/context";

Vue.config.productionTip = false;
Vue.use(context);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app");
