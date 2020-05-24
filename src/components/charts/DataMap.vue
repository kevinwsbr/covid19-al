<template>
  <div class="map">
    <div v-if="loading" class="map-alert text-center">
      <span>Aguarde, carregando o mapa...</span>
    </div>
    <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-geo-json
        v-if="show"
        :geojson="geojson"
        :options="options"
        :options-style="styleFunction"
      />
      <l-control position="bottomright">
        <div ref="chart-legend" class="info legend"></div>
      </l-control>
    </l-map>
  </div>
</template>

<script>
import { LMap, LControl, LTileLayer, LGeoJson } from "vue2-leaflet";

export default {
  name: "DataMap",
  props: {
    mapType: String,
  },
  components: {
    LMap,
    LControl,
    LTileLayer,
    LGeoJson,
  },
  watch: {
    /*mapType: function(newType) {
       
      this.options = this.onEachFeatureFunction(newType);
    }*/
  },
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 7.5,
      center: [-9.75164, -36.6604],
      geojson: null,
      fillColor: "#e4ce7f",
      url:
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
      attribution: "&copy; OpenStreetMap",
    };
  },
  methods: {
    getColor(d, t) {
      if (t === "confirmedCases") {
        return d > 3000
          ? "#513413"
          : d > 150
          ? "#ab6f28"
          : d > 50
          ? "#dc8e33"
          : d > 25
          ? "#f49e39"
          : d > 5
          ? "#f7bb74"
          : d >= 1
          ? "#fbd8b0"
          : "#fdf1e3"; //fdebd7
      } else {
        return d > 100
          ? "#225f88"
          : d > 10
          ? "#3188c3"
          : d > 5
          ? "#5eace1"
          : d >= 1
          ? "#86c1e8"
          : "#afd5f0";
      }
    },
    generateLegends(type) {
      var grades = [];
      if (type === "confirmedCases") {
        grades = [1, 5, 25, 50, 150, 3000];
      } else {
        grades = [1, 5, 10, 100];
      }
      var div = this.$refs["chart-legend"];

      div.innerHTML = "";

      div.innerHTML +=
        '<div><i style="background:' +
        this.getColor(0, type) +
        '"></i> ' +
        "0<br></div>";

      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<div><i style="background:' +
          this.getColor(grades[i] + 1, type) +
          '"></i> ' +
          grades[i] +
          (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+" + "</div>");
      }
    },
    onEachFeatureFunction(sras) {
      var label =
        sras === "confirmedCases" ? " caso" : sras === "deaths" ? " óbito" : "";

      if (!this.enableTooltip) {
        return () => {};
      }
      var c = false;
      // this.generateLegends(sras);
      return (feature, layer) => {
        if (!c) this.generateLegends(sras);

        c = true;
        var city = feature.properties.name;
        var value = "";

        if (sras === "confirmedCases") {
          value = feature.properties.confirmedCases;
        } else if (sras === "deaths") {
          value = feature.properties.deaths;
        }

        layer.options.fillColor = this.getColor(value, sras);

        var plural = value != 1 ? "s confirmados" : " confirmado";

        layer.bindTooltip(
          "<div><b>" +
            city +
            "</b></div>" +
            "<div>" +
            value +
            label +
            plural +
            "</div>",
          { permanent: false, sticky: true }
        );
      };
    },
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction(this.mapType),
      };
    },
    styleFunction() {
      //const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#fff",
          opacity: 1,
          fillColor: "#fff", //this.getColor(feature.properties.confirmedCases),
          fillOpacity: 1,
        };
      };
    },
  },
  async created() {
    this.loading = true;

    await this.axios
      .get("https://api.kevinws.com/cities/map")
      .then((response) => {
        this.geojson = response.data;
      });

    this.loading = false;
  },
};
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss">
.legend {
  line-height: 18px;
  color: #555;
}
.legend i {
  width: 18px;
  height: 18px;
  float: left;
  margin-right: 8px;
}
.info {
  padding: 6px 8px;
  font: 14px/16px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.info h4 {
  margin: 0 0 5px;
  color: #777;
}

@media screen and (max-width: 576px) {
  .legend {
    line-height: 19px;
  }
}

@media screen and (min-width: 420px) {
  .info div {
    margin: 3px 0;
  }
}
</style>
