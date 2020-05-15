<template>
  <b-card class="pie-card" header-tag="header">
    <template v-slot:header>
        <div class="d-flex justify-content-between">
          <div class="my-auto w-100">
            <h2 class=" mb-0">Leitos reservados para COVID-19</h2>
          </div>
        </div>
      </template>
    <b-row class="mx-2 mb-4">
      <b-col v-if="total" class="py-1 my-2 inner-pie-card" cols="12" md="4">
        <DataPie :chartdata="total" />
      </b-col>

      <b-col v-if="separated" class="bar-container">
        <div class="w-100">
          <b-row v-for="item in separated" :key="item.title">
            <b-col><BarChart :chartdata="item"/></b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import DataPie from "../DataPie";
import BarChart from "../BarChart";

export default {
  name: "PieChartCard",
  props: ["total", "separated"],
  components: {
    DataPie,
    BarChart,
  },
  mounted() {
    //await this.updateVacancies();
    //const response = await fetch("./res.json");
  },
};
</script>

<style lang="scss">

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


</style>
<style scoped>

@media screen and (max-width: 1024px) {
  .inner-pie-card {
    padding: 0 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .inner-pie-card {
    padding: 0 2rem;
  }
}

@media screen and (min-width: 768px) {
  .card-body {
    max-height: 400px;
  }
}

@media screen and (min-width: 1024px) {
  .inner-pie-card {
    padding: 0 3.5rem;
  }
}

.bar-container {
  display: flex;
  align-items: center;
}

.row:nth-of-type(n + 2) > div >>> h3 {
  margin-top: 1rem;
}
</style>
