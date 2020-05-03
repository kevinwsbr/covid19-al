<template>
  <b-card class="table-card" header-tag="header">
    <template v-slot:header>
      <div class="d-flex justify-content-between">
        <div class="my-auto">
          <h2 class="align-left mb-0">Casos por município</h2>
        </div>
      </div>
    </template>
    <b-table sticky-header :fields="fields" :items="cities"></b-table>
    <div v-if="!cities.length" class="loader-container">
      <div v-for="i in 9" :key="i" class="placeholder d-flex wave">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>

    <p>
      <b>Nota:</b> a diferença entre os números totais e os números apresentados
      nesta tabela corresponde aos casos registrados em Alagoas referentes a
      pessoas que residem em outros estados.
    </p>
  </b-card>
</template>

<script>
export default {
  name: "TableCard",
  props: ["cities"],
  data() {
    return {
      filteredCities: [],
      fields: [
        {
          key: "name",
          label: "",
          //sortable: true
          formatter: "formatName",
        },
        {
          key: "confirmedCases",
          label: "Confirmados",
          //sortable: false
        },
        {
          key: "deaths",
          label: "Óbitos",
          //sortable: false
        },
        {
          key: "letality",
          label: "Letalidade",
          formatter: "addPercentage",
          //sortable: false
        },
      ],
    };
  },
  methods: {
    formatName(text) {
      text = text
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
      return text;
    },
    addPercentage(text) {
      return text + "%";
    },
  },
  mounted() {

  },
};
</script>

<style lang="scss">
.card-header {
  background: none !important;
  button {
    border-radius: 1rem;
    padding: 0.2em 1em;
  }
}
.map-card,
.table-card {
  max-height: 462px;
  .card-body {
    padding: 0;
  }
}
table {
  height: 100%;
  overflow-y: auto;
}
thead {
  font-size: 0.8em;
  text-align: center;
}

td {
  padding: 0.5em !important;
  font-size: 0.8em;
  text-align: center;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  &:first {
    border-top: 1px solid white;
  }
}
.b-table-sticky-header {
  overflow-y: auto;
  max-height: 350px !important;
  margin-bottom: 0 !important;
}
div::-webkit-scrollbar {
  width: 10px;
}
div {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
div::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
div::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}

.table thead th {
  font-weight: 600 !important;
  border: 0px !important;
  &:first-of-type {
    color: #fff !important;
  }
}
</style>
<style lang="scss" scoped>
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
table::-webkit-scrollbar {
  width: 11px;
}
table {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
table::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
table::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
p {
  font-size: 58%;
  margin: 1em;
  text-align: justify;
}

.placeholder {
  width: 100%;
  height: 34px;
  border-bottom: 1px solid #dee2e6;
}

.placeholder .line {
  width: 65%;
  height: 10px;
  margin: auto 1.5rem;
}

.placeholder .line:nth-child(2),
.line:nth-child(3),
.line:nth-child(4) {
  width: 35%;
  height: 10px;
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
