<template>
  <b-container class="main-container">
    <dash-header :date="date" :time="time" />
    <section class="main">
      <section class="synthesis mb-3">
        <info-section :cards="cards" />
      </section>

      <section class="cases mb-3">
        <cases-section :cities="cities" />
      </section>

      <section class="deaths mb-3">
        <deaths-section :cities="cities" />
      </section>

      <section class="beds mb-3">
        <beds-section :beds="vacancies" />
      </section>
    </section>
    <dash-footer :version="version" />
  </b-container>
</template>

<script>
import Header from "./components/Header";
import Info from "./components/sections/Info";
import Cases from "./components/sections/Cases";
import Deaths from "./components/sections/Deaths";
import Beds from "./components/sections/Beds";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
    "cases-section": Cases,
    "info-section": Info,
    "deaths-section": Deaths,
    "beds-section": Beds,
  },
  data() {
    return {
      version: "1.2.0",
      date: "",
      time: "",
      results: [],
      cities: [],
      vacancies: [],
      cards: [],
      cases: [],
    };
  },
  methods: {
    updateCards(data) {
      this.cards = [
        {
          name: "Casos confirmados",
          color: "#f49e39",
          values: [],
        },
        {
          name: "Óbitos confirmados",
          color: "#3597db",
          values: [],
        },
      ];

      this.cards[0].values.push({
        description: "Casos acumulados",
        value: data.confirmedCases | 0,
      });

      this.cards[0].values.push({
        description: "Novos casos",
        value: data.suspiciousCases | 0,
      });

      this.cards[0].values.push({
        description: "Casos recuperados",
        value: 3230,
      });

      this.cards[0].values.push({
        description: "Casos notificados",
        value: 350,
      });

      this.cards[0].values.push({
        description: "Casos suspeitos",
        value: 330,
      });

      this.cards[0].values.push({
        description: "Casos descartados",
        value: 65756,
      });

      this.cards[1].values.push({
        description: "Óbitos acumulados",
        value: 350,
      });

      this.cards[1].values.push({
        description: "Novos óbitos",
        value: 330,
      });

      this.cards[1].values.push({
        description: "Taxa de letalidade",
        value: 65756,
      });

      this.cards[1].values.push({
        description: "Taxa de mortalidade",
        value: 65756,
      });

      //   this.cards.push({
      //     id: 1,
      //     title: "Casos confirmados",
      //     color: "#f49e39",
      //     value: data.confirmedCases | 0,
      //   });

      //   this.cards.push({
      //     id: 2,
      //     title: "Óbitos",
      //     color: "#3597db",
      //     value: data.deaths | 0,
      //   });

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

  .section-title {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1.2rem;

    position: relative;
    padding-left: 16px;
    color: #18212f;
    line-height: 22px;
    letter-spacing: -0.84px;
    &::before {
      display: block;
      content: "";
      width: 6px;
      height: 32px;
      background: red;
      box-shadow: red;
      border-radius: 15px;
      top: 50%;
      left: 0;
      position: absolute;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
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
