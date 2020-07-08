<template>
  <div>
    <b-row>
      <b-col>
        <h2 class="section-title blue">Óbitos confirmados</h2>
      </b-col>
    </b-row>
    <b-row class="row-eq-height">
      <b-col class="mb-4" cols="12" xl="5">
        <deaths-table :cities="cities" tableType="deaths" />
      </b-col>
      <b-col class="mb-4" cols="12" xl="7">
        <deaths-map title="óbitos" type="deaths" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-4">
        <b-card class="chart-card" header-tag="header">
          <template v-slot:header>
            <div class="d-flex justify-content-between">
              <div class="my-auto w-100">
                <h2 class=" mb-0">Óbitos novos por data de notificação</h2>
              </div>
            </div>
          </template>
          <deaths-bar-chart type="deaths" />
        </b-card>
      </b-col>
      <b-col class="mb-4">
        <b-card class="chart-card" header-tag="header">
          <template v-slot:header>
            <div class="d-flex justify-content-between">
              <div class="my-auto w-100">
                <h2 class=" mb-0">Óbitos acumulados por COVID-19</h2>
              </div>
            </div>
          </template>
          <deaths-line-chart type="deaths" />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-4" cols="12" md="7">
        <b-card class="chart-card" header-tag="header">
          <template v-slot:header>
            <div class="d-flex justify-content-between">
              <div class="my-auto w-100">
                <h2 class=" mb-0">Comorbidades registradas</h2>
              </div>
            </div>
          </template>
          <deaths-comorbities-bar />
        </b-card>
      </b-col>
      <b-col class="mb-4" cols="12" md="5">
        <b-card class="chart-card" header-tag="header">
          <template v-slot:header>
            <div class="d-flex justify-content-between">
              <div class="my-auto w-100">
                <h2 class=" mb-0">Idade por gênero</h2>
              </div>
            </div>
          </template>
          <deaths-pyramid-bar />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MapCard from "../cards/MapCard";
import TableCard from "../cards/TableCard";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import ComorbitiesBar from "../charts/ComorbitiesBar";
import PyramidBar from "../charts/PyramidBar";

export default {
  name: "Deaths",
  props: ["cities"],
  components: {
    "deaths-map": MapCard,
    "deaths-table": TableCard,
    "deaths-bar-chart": BarChart,
    "deaths-line-chart": LineChart,
    "deaths-comorbities-bar": ComorbitiesBar,
    "deaths-pyramid-bar": PyramidBar,
  },
};
</script>

<style lang="scss" scoped></style>
