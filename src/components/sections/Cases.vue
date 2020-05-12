<template>
  <div>
    <b-row>
      <b-col>
        <h2>Casos confirmados</h2>
      </b-col>
    </b-row>
    <b-row class="row-eq-height">
      <b-col class="mb-4" cols="12" xl="7">
        <cases-map />
      </b-col>
      <b-col class="mb-4" cols="12" xl="5">
        <cases-table :cities="cities" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-3">
        <b-card class="chart-card" header-tag="header">
          <template v-slot:header>
            <div class="d-flex justify-content-between">
              <div class="my-auto w-100">
                <h2 class=" mb-0">Casos novos por dia</h2>
              </div>
            </div>
          </template>
          <cases-chart type="newCases" />
        </b-card>
      </b-col>
      <b-col class="mb-3">
        <b-card class="chart-card" header-tag="header">
          <template v-slot:header>
            <div class="d-flex justify-content-between">
              <div class="my-auto w-100">
                <h2 class=" mb-0">Casos acumulados de COVID-19</h2>
              </div>
            </div>
          </template>
          <cases-chart type="totalCases" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MapCard from "../cards/MapCard";
import TableCard from "../cards/TableCard";
import ChartCard from "../cards/ChartCard";

export default {
  name: "Cases",
  props: ["cities"],
  components: {
    "cases-map": MapCard,
    "cases-table": TableCard,
    "cases-chart": ChartCard,
  },
};
</script>

<style lang="scss" scoped></style>
