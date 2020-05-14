<template>
  <div>
    <div>
      <!-- <b-navbar sticky class="menu" type="dark">
        <b-container>
          <b-navbar-brand href="#">
            <img
              draggable="false"
              alt="Brasão do Estado de Alagoas"
              src="./assets/al.svg"
            />
            <span><b>COVID-19</b> Alagoas</span>
          </b-navbar-brand>

          <b-navbar-nav class="ml-auto">
            <b-nav-item active href="#">Painel Geral</b-nav-item>
            <b-nav-item href="#">Gastos</b-nav-item>
            <b-nav-item href="#">Sobre</b-nav-item>
          </b-navbar-nav>
        </b-container>
      </b-navbar> -->
    </div>
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
          <beds-section :beds="beds" />
        </section>
      </section>
      <dash-footer :version="version" />
    </b-container>
  </div>
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
      beds: [],
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
          name: "Óbitos",
          color: "#3597db",
          values: [],
        },
      ];

      this.cards[0].values.push({
        description: "Casos confirmados",
        value: data.stats.confirmedCases | 0,
      });

      this.cards[0].values.push({
        description: "Novos casos",
        value: data.stats.newCases | 0,
      });

      this.cards[0].values.push({
        description: "Casos recuperados",
        value: data.stats.recoveredCases | 0,
      });

      this.cards[0].values.push({
        description: "Casos notificados",
        value: data.stats.totalCases | 0,
      });

      this.cards[0].values.push({
        description: "Casos suspeitos",
        value: data.stats.suspiciousCases | 0,
      });

      this.cards[0].values.push({
        description: "Casos descartados",
        value: data.stats.discardedCases | 0,
      });

      this.cards[1].values.push({
        description: "Óbitos",
        value: data.stats.deaths | 0,
      });

      this.cards[1].values.push({
        description: "Novos óbitos",
        value: data.stats.newDeaths | 0,
      });

      this.cards[1].values.push({
        description: "Letalidade",
        percentage: true,
        value: data.stats.letality,
      });

      this.cards[1].values.push({
        description: "Mortalidade",
        text: true,
        value: data.stats.mortality,
      });
    },
  },
  mounted() {
    this.axios.get("https://api.kevinws.com/stats/").then((response) => {
      this.results = response.data;
      this.cities = this.results.cities;
      this.date = this.results.date;
      this.beds = this.results.beds;
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

  @media screen and (max-width: 576px) {
    .menu {
      padding: 0;
      .container {
        display: flex;
        flex-direction: column;
        ul {
          margin: 0 auto;
        }
      }
    }
  }

  .menu {
    background: #1a629d;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: 1px solid rgba(28, 28, 28, 0.07);

    .active {
      font-weight: 800;
      color: white;
    }

    img {
      max-height: 2rem;
      float: left;
      margin-right: 0.4em;
    }
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

      border-radius: 15px;
      top: 50%;
      left: 0;
      position: absolute;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    &.purple {
      &::before {
        background: #9d5cb6;
        box-shadow: 0 3px 8px 0px #9d5cb64f;
      }
    }
    &.blue {
      &::before {
        background: #3597db;
        box-shadow: 0 3px 8px 0px #3597db4d;
      }
    }

    &.orange {
      &::before {
        background: #f49e39;
        box-shadow: 0 3px 8px 0px #f49e394d;
      }
    }

    &.green {
      &::before {
        background: #58cd72;
        box-shadow: 0 3px 8px 0px rgba(88, 205, 114, 0.3);
      }
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

  @media screen and (max-width: 768px) {
    h2:not(.section-title) {
      text-align: center;
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
