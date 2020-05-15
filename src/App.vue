<template>
  <div id="app">
    <b-navbar id="nav" sticky class="menu" type="dark">
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
          <b-nav-item active href="#"
            ><router-link to="/">Painel Geral</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/">Gastos</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/sobre">Sobre</router-link></b-nav-item
          >
        </b-navbar-nav>
      </b-container>
    </b-navbar>
    <b-container class="main-container">
      <dash-header :date="date" :time="time" />
      <router-view />
      <dash-footer :version="version" />
    </b-container>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      version: "1.3",
      date: "",
      time: "",
    };
  },
  methods: {
    async fetchStats() {
      await this.axios
        .get("https://api.kevinws.com/stats/")
        .then((response) => {
          this.time = response.data.time;
          this.date = response.data.date;
        });
    },
  },
  mounted() {
    this.fetchStats();
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
