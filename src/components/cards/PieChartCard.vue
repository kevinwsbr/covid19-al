<template>
  <b-card class="pie-card" header-tag="header">
    <template v-slot:header>
      <div class="d-flex justify-content-between">
        <div class="my-auto w-100">
          <h2 class="mb-0">Leitos reservados para COVID-19</h2>
        </div>
      </div>
    </template>
    <b-row>
      <b-col
        v-for="item in vacancies"
        :key="item.datasets[0].title"
        class="px-5 py-1 my-2"
        cols="12"
        md="4"
      >
        <DataPie :chartdata="item"></DataPie>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import DataPie from "../DataPie.vue";

export default {
  name: "PieChartCard",
  props: ["vacancies"],
  components: {
    DataPie,
  },

  async mounted() {
    //await this.updateVacancies();
    //const response = await fetch("./res.json");
  },
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
.pie-card .card-body {
  padding: 0;
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
@media screen and (min-width: 768px) {
  .card-body {
    max-height: 400px;
  }
}
</style>
