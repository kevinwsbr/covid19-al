import Vue from "vue";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "leaflet/dist/leaflet.css";
import VuePapaParse from "vue-papa-parse";
import axios from "axios";
import VueAxios from "vue-axios";
import Vue2Filters from "vue2-filters";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VuePapaParse);
Vue.use(VueAxios, axios);

Vue.use(Vue2Filters);

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
