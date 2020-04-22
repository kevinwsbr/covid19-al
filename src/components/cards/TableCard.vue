<template>
  <b-card class="table-card" header-tag="header">
    <template v-slot:header>
      <div class="d-flex justify-content-between">
        <div class="my-auto">
          <h2 class="align-left mb-0">Casos por município</h2>
        </div>
      </div>
    </template>
    <b-table sticky-header :items="items"></b-table>
  </b-card>
</template>

<script>
export default {
  name: "TableCard",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Casos confirmados",
          color: "#1976D2",
          value: 171
        },
        {
          id: 2,
          title: "Óbitos",
          color: "#FF5252",
          value: 18
        },
        {
          id: 3,
          title: "Recuperados",
          color: "#009688",
          value: "30"
        },
        {
          id: 4,
          title: "Letalidade",
          color: "#009688",
          value: "10.5%"
        }
      ],
      items: [
        { Cidade: "Maceió", Confirmados: 184, Óbitos: 13, Letalidade: 6.5 + "%"},
        { Cidade: "Marechal Dedoro", Confirmados: 6, Óbitos: 1, Letalidade: 16.6 + "%"},
        { Cidade: "Rio Largo", Confirmados: 5, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Pilar", Confirmados: 2, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Maribondo", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Murici", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Capela", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Maribondo", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Porto Real do Colégio", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Palmeira dos Índios", Confirmados: 2, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Satuba", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "União dos Palmares", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Arapiraca", Confirmados: 2, Óbitos: 0, Letalidade: 0 + "%"},
        { Cidade: "Viçosa", Confirmados: 1, Óbitos: 1, Letalidade: 0 + "%"},
        { Cidade: "São Miguel dos Milagres", Confirmados: 1, Óbitos: 1, Letalidade: 100 + "%"},
        { Cidade: "Ibateguara", Confirmados: 1, Óbitos: 1, Letalidade: 100 + "%"},
        { Cidade: "Boca da Mata", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%"},
      ]
    };
  },
  async created() {
    //const response = await fetch("./res.json");
    //const data = await response.json();
    //this.cards = data;
    //console.log(this.cards);
  }
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

th {
    //border-top: 1px solid white;
}
.b-table-sticky-header {
    overflow-y: auto;
    max-height: 395px !important;
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
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
</style>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
.card-map {
  padding: 0;
}
* {
  font-family: "Open Sans", sans-serif;
}
h2 {
  font-size: 1.3rem;
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
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
</style>