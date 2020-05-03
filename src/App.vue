<template>
  <div id="app">
    <b-container class="main-container">
      <header>
        <b-row class="mt-5 mb-4">
          <b-col>
            <img
              draggable="false"
              alt="Brasão do Estado de Alagoas"
              src="./assets/al.svg"
            />
            <h1 class="mb-0">Painel COVID-19 Alagoas</h1>
            <span>Atualizado em {{ date }} às {{ time }}h</span>
          </b-col>
        </b-row>
      </header>

      <section class="main">
        <b-row>
          <b-col
            class="mb-4"
            cols="12"
            md="6"
            xl="3"
            v-for="card in cards"
            :key="card.id"
          >
            <InfoCard :data="card" />
          </b-col>
        </b-row>
        <b-row class="row-eq-height">
          <b-col class="mb-4" cols="12" xl="7">
            <MapCard />
          </b-col>
          <b-col class="mb-4" cols="12" xl="5">
            <TableCard :cities="cities" />
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col class="mb-3">
            <b-card class="chart-card" header-tag="header">
              <template v-slot:header>
                <div class="d-flex justify-content-between">
                  <div class="my-auto">
                    <h2 class="align-left mb-0">Casos novos por dia</h2>
                  </div>
                </div>
              </template>
              <ChartCard type="newCases" />
            </b-card>
          </b-col>
          <b-col class="mb-3">
            <b-card class="chart-card" header-tag="header">
              <template v-slot:header>
                <div class="d-flex justify-content-between">
                  <div class="my-auto">
                    <h2 class="align-left mb-0">Casos acumulados</h2>
                  </div>
                </div>
              </template>
              <ChartCard type="totalCases" />
            </b-card>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col class="mb-4">
            <PieChartCard />
          </b-col>
        </b-row>
      </section>
      <footer class="mb-5">
        <b-row>
          <b-col class="text-center">
            <span class="d-block mb-3"
              >Fontes: Ministério da Saúde, Secretaria da Saúde do Estado de
              Alagoas, Secretarias Municipais de Saúde</span
            >
            <span class="d-block">
              Painel desenvolvido por
              <a href="https://kevinws.com">Kevin Washington</a>
              , v{{ version }}
            </span>
          </b-col>
        </b-row>
      </footer>
    </b-container>
  </div>
</template>

<script>
import MapCard from "./components/cards/MapCard";
import InfoCard from "./components/cards/InfoCard";
import ChartCard from "./components/cards/ChartCard";
import TableCard from "./components/cards/TableCard";
import PieChartCard from "./components/cards/PieChartCard";

export default {
  name: "App",
  components: {
    MapCard,
    ChartCard,
    TableCard,
    InfoCard,
    PieChartCard,
  },
  data() {
    return {
      version: "1.2.0",
      date: "02 de maio",
      time: "19:00",
      results: [],
      cities: [],
      cards: ["", "", "", ""],
    };
  },
  methods: {
    updateCards(data) {
      this.cards.pop();
      this.cards.pop();
      this.cards.pop();
      this.cards.pop();
      this.cards.push({
        id: 1,
        title: "Casos confirmados",
        color: "#f49e39",
        value: data.confirmedCases | 0,
      });

      this.cards.push({
        id: 2,
        title: "Óbitos",
        color: "#3597db",
        value: data.deaths | 0,
      });

      this.cards.push({
        id: 3,
        title: "Recuperados",
        color: "#58cd72",
        value: data.recoveredCases | 0,
      });

      this.cards.push({
        id: 4,
        title: "Letalidade",
        color: "#9d5cb6",
        value: ((data.deaths / data.confirmedCases) * 100).toFixed(1) + "%",
      });
    },
  },
  mounted() {
    this.axios.get("https://api.kevinws.com/stats/").then((response) => {
      this.results = response.data;
      this.cities = this.results.cities;
      this.updateCards(this.results);
    });
  },
  async created() {
    //const response = await fetch("./res.json");
    //const data = await response.json();
    //this.cards = data;
    //console.log(this.cards);
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
.card-map {
  padding: 0;
}
* {
  font-family: "Open Sans", sans-serif;
}
@media screen and (min-width: 992px) {
  .main-container {
    width: 70%;
  }
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

header {
  h1 {
    font-weight: 800;
    font-size: 1.6rem;
    line-height: 34px;
    letter-spacing: -0.05rem;
    color: #172b3e;
  }
  span {
    color: #607d8b;
    font-weight: 500;
    letter-spacing: -0.02rem;
  }
  img {
    max-height: 55px;
    float: left;
    margin-right: 0.8em;
  }
}
footer {
  span {
    font-weight: 700;
    letter-spacing: -0.84px;
    color: #172b3e;
    &:first-of-type {
      font-weight: 500;
      color: #8498ae;
    }
  }
}
@media screen and (max-width: 576px) {
  .mb-4 {
    margin-bottom: 1rem !important;
  }
}
</style>
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
html {
  --scrollbarBG: #ffffff;
  --thumbBG: #dee2e6;
}
body::-webkit-scrollbar {
  width: 11px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  background-color: rgba(3, 169, 244, 0.01) !important;
}
body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
</style>
