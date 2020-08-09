import Vue from "vue";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { BootstrapVue } from "bootstrap-vue";
import "leaflet/dist/leaflet.css";
import VuePapaParse from "vue-papa-parse";
import axios from "axios";
import VueAxios from "vue-axios";
import Vue2Filters from "vue2-filters";
import router from "./router";
import Chart from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEquals } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEquals)
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);
Vue.use(VuePapaParse);
Vue.use(VueAxios, axios);
Vue.use(Vue2Filters);
Vue.use(ChartDataLabels);

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Chart.plugins.unregister(ChartDataLabels);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
