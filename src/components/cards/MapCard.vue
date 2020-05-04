<template>
  <b-card class="map-card" header-tag="header">
    <template v-slot:header>
      <div class="">
        <div class="title-container my-auto">
          <h2 class="mb-0">Casos em Alagoas</h2>
        </div>
        <div class="buttons-container p-0">
          <b-button
            v-on:click="changeMap('confirmedCases')"
            class="m-1 btn-confirmed"
            variant="primary"
            size="sm"
          >Confirmados</b-button>
          <b-button
            v-on:click="changeMap('deaths')"
            class="m-1 btn-deaths"
            variant="danger"
            size="sm"
          >Óbitos</b-button>
        </div>
      </div>
    </template>
    <DataMap :mapType="type" />
  </b-card>
</template>

<script>
import DataMap from "../DataMap.vue";

export default {
  name: "MapCard",
  components: {
    DataMap
  },
  data() {
    return {
      type: "confirmedCases"
    };
  },
  methods: {
    changeMap(type) {
      if (type !== this.type) this.type = type;
    }
  },
  async created() {
    //const response = await fetch("./res.json");
    //const data = await response.json();
    //this.cards = data;
    //console.log(this.cards);
  }
};
</script>

<style lang="scss">
h2 {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
}
.card {
  border-radius: 1rem;
  box-shadow: 0 4px 6px 0 rgba(31, 70, 88, 0.04);
  background: #fff;
  border: 1px solid #dbe9f5;
}
.card-header {
  background: none !important;
  button {
    border-radius: 1rem;
    padding: 0.2em 1em;
  }
}
.map-card,
.table-card {
  .card-body {
    padding: 0;
  }
}

.map-alert {
  height: 400px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  z-index: 5;
  width: 100%;
  position: absolute;

  span {
    line-height: 400px;
    font-size: 1.2em;
    font-weight: 600;
  }
}

.leaflet-container {
  z-index: 3;
  height: 400px !important;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.btn-confirmed,
.btn-deaths {
  font-weight: 900 !important;
}

@media screen and (max-width: 576px) {
  .leaflet-container {
    height: 360px !important;
  }
  .btn-confirmed,
  .btn-deaths {
    float: right;
  }

  .map-alert {
  height: 360px;

  span {
    line-height: 360px;
    font-size: 0.9rem;
  }
}
}

.btn-confirmed {
  background: #f49e39 !important;
  border-color: #e09137 !important;
  font-size: 0.75rem !important;
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 158, 57, 0.5) !important;
  }
}

.btn-deaths {
  background: #3597db !important;
  border-color: #328ccc !important;
  font-size: 0.75rem !important;
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(53, 151, 219, 0.5) !important;
  }
}
</style>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
.card-map {
  padding: 0;
}
* {
  font-family: "Open Sans", sans-serif;
}
h2 {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
}
.card {
  border-radius: 1rem;
  box-shadow: 0 4px 6px 0 rgba(31, 70, 88, 0.04);
  background: #fff;
  border: 1px solid #dbe9f5;
}
</style>