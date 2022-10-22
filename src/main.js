import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import router from "./router";
import context from "./plugins/context";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;
Vue.use(context);
Vue.use(VueRouter);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
