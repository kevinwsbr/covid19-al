<template>
  <div id="app">
    <b-container class="main-container">
      <header>
        <b-row class="mt-5 mb-4 header-row">
          <b-col>
            <img
              draggable="false"
              alt="Brasão do Estado de Alagoas"
              src="./assets/al.svg"
            />
            <h1>Painel COVID-19 Alagoas</h1>
            <div class="subtitle-container">
              <span>Atualizado em </span>
              <div v-if="!date" class="placeholder wave">
                <div class="line"></div>
              </div>
              <span class="variable">{{ date }}</span> <span> às </span>
              <div v-if="!time" class="placeholder wave">
                <div class="line"></div>
              </div>
              <span class="variable">{{ time }}</span
              ><span>h</span>
            </div>
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
                  <div class="my-auto w-100">
                    <h2 class=" mb-0">Casos novos por dia</h2>
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
                  <div class="my-auto w-100">
                    <h2 class=" mb-0">Casos acumulados de COVID-19</h2>
                  </div>
                </div>
              </template>
              <ChartCard type="totalCases" />
            </b-card>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col class="mb-4">
            <PieChartCard v-if="vacancies" :pie="vacancies" :bar="vacancies" />
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
      date: "",
      time: "",
      results: [],
      cities: [],
      vacancies: [],
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
    this.axios
      .get("https://api.kevinws.com/stats/")
      .then((response) => {
        this.results = response.data;
        this.cities = this.results.cities;
        this.date = this.results.date;
        this.time = this.results.time;
        this.vacancies = this.results.vacancies;
        this.updateCards(this.results);
      });
      console.log(this.vacancies)
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

@media screen and (max-width: 576px) {
  .mb-4 {
    margin-bottom: 1rem !important;
  }
}

.variable,
.placeholder {
  margin: 0 0.2rem;
}

.placeholder {
  width: 40px;
  height: 100%;
}

.placeholder .line {
  margin-top: 5px;
  height: 16px;
}

.placeholder .line:nth-child(2) {
  margin-top: 10px;
  height: 40px;
  width: 50%;
}

.placeholder {
  float: left;
}

.placeholder.wave div {
  animation: wave 1s infinite linear forwards;
  -webkit-animation: wave 1s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
}

@keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

@-webkit-keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  color: rgb(23, 43, 62) !important;
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

header {
  h1 {
    font-weight: 800;
    margin-bottom: -0.3rem;
    font-size: 1.3rem;
    line-height: 34px;
    letter-spacing: -0.05rem;
    color: #172b3e;
  }
  h2 {
    margin-bottom: 0;
  }
  span {
    color: #607d8b;
    font-weight: 500;
    letter-spacing: -0.02rem;
    float: left;
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

  @media screen and (max-width: 420px) {
    span:first-of-type {
      font-size: 0.8rem;
    }
  }
}

@media screen and (max-width: 375px) {
  header {
    text-align: center;
    .subtitle-container {
      width: 222px;
      margin-left: 50%;
      transform: translateX(-50%);
      height: 25px;
    }
    img {
      float: none;
      margin: 0 auto;
    }
    h1 {
      font-size: 1.2rem;
      margin-bottom: -5px;
    }
  }
}

@media screen and (max-width: 420px) {
  h1 {
    font-size: 1.3rem;
    margin-bottom: -5px;
  }
  h2 {
    text-align: center;
  }
  header {
    .header-row {
      margin: 2rem 0 !important;
    }
  }
  .buttons-container {
    height: 30px;
    display: flex;
    justify-content: center;
    margin-top: 0.3em;
    button {
      border-radius: 1rem;
      padding: 1em;
      line-height: 0.2em;
    }
  }
}

@media screen and (min-width: 420px) {
  header {
    h1 {
      font-size: 1.5rem;
    }
  }
  .title-container {
    float: left;
    h2 {
      padding: 0.2em 0;
    }
  }
  .buttons-container {
    float: right;
  }
}

.card-header {
  border-bottom: 1px solid #dbe9f5 !important;
}
</style>
