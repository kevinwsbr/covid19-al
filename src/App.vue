<template>
  <b-container class="main-container">
    <dash-header :date="date" :time="time" />

    <section class="main">
      <b-row>
        <b-col class="mb-4" cols="12" md="6" v-for="i in 2" :key="i">
          <InfoCard :data="cases" />
        </b-col>
      </b-row>
      <section class="cases mb-3">
        <cases-section :cities="cities" />
      </section>

      <section class="deaths mb-3">
        <deaths-section :cities="cities" />
      </section>

      <section class="vacancies mb-3">
        <b-row>
          <b-col>
            <h2>Disponibilidade de leitos</h2>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col class="mb-4">
            <PieChartCard v-if="vacancies" :pie="vacancies" :bar="vacancies" />
          </b-col>
        </b-row>
      </section>
    </section>
    <dash-footer :version="version" />
  </b-container>
</template>

<script>
import InfoCard from "./components/cards/InfoCard";
import PieChartCard from "./components/cards/PieChartCard";
import Cases from "./components/sections/Cases";
import Deaths from "./components/sections/Deaths";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    InfoCard,
    PieChartCard,
    "dash-header": Header,
    "dash-footer": Footer,
    "cases-section": Cases,
    "deaths-section": Deaths,
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
      cases: [],
    };
  },
  methods: {
    updateCards(data) {
      this.cards.pop();
      this.cards.pop();

      this.cases.push({
        description: "Confirmados",
        value: data.confirmedCases | 0,
      });

      this.cases.push({
        description: "Novos casos",
        value: data.suspiciousCases | 0,
      });

      this.cases.push({
        description: "Em investigação",
        value: 30
      });

      this.cases.push({
        description: "Casos notificados",
        value: 30
      });

      this.cases.push({
        description: "Casos descartados",
        value: 30
      });

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

      //   this.cards.push({
      //     id: 3,
      //     title: "Recuperados",
      //     color: "#58cd72",
      //     value: data.recoveredCases | 0,
      //   });

      //   this.cards.push({
      //     id: 4,
      //     title: "Letalidade",
      //     color: "#9d5cb6",
      //     value: ((data.deaths / data.confirmedCases) * 100).toFixed(1) + "%",
      //   });
    },
  },
  mounted() {
    this.axios.get("https://api.kevinws.com/stats/").then((response) => {
      this.results = response.data;
      this.cities = this.results.cities;
      this.date = this.results.date;
      this.time = this.results.time;
      this.vacancies = this.results.vacancies;
      this.updateCards(this.results);
    });
    console.log(this.vacancies);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
html {
  --scrollbarBG: #ffffff;
  --thumbBG: #dee2e6;
}

body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  background-color: rgba(3, 169, 244, 0.01) !important;
  * {
    font-family: "Open Sans", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgb(23, 43, 62) !important;
  }
  h2 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.05rem;
  }
  .card {
    border-radius: 1rem;
    box-shadow: 0 4px 6px 0 rgba(31, 70, 88, 0.04);
    background: #fff;
    border: 1px solid #dbe9f5;
  }

  @media screen and (max-width: 420px) {
    h1 {
      font-size: 1.3rem;
      margin-bottom: -5px;
    }
    h2 {
      text-align: center;
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

  @media screen and (max-width: 576px) {
    .mb-4 {
      margin-bottom: 1rem !important;
    }
  }

  @media screen and (min-width: 420px) {
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

  @media screen and (min-width: 992px) {
    .main-container {
      width: 75%;
    }
  }

  .card-header {
    border-bottom: 1px solid #dbe9f5 !important;
  }
}

body::-webkit-scrollbar {
  width: 11px;
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
