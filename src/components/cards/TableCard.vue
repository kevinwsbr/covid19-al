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
    <p>
      <b>Nota:</b> a diferença entre os números totais e os números apresentados nesta tabela corresponde aos casos registrados em Alagoas referentes a pessoas que residem em outros estados.
    </p>
  </b-card>
</template>

<script>
export default {
  name: "TableCard",
  data() {
    return {
      items: [
        { Cidade: "Anadia", Confirmados: 1, Óbitos: 1, Letalidade: 100 + "%" },
        {
          Cidade: "Arapiraca",
          Confirmados: 16,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        { Cidade: "Atalaia", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%" },
        {
          Cidade: "Barra de Santo Antônio",
          Confirmados: 1,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Boca da Mata",
          Confirmados: 1,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        { Cidade: "Capela", Confirmados: 1, Óbitos: 0, Letalidade: 0 + "%" },
        {
          Cidade: "Delmiro Gouveia",
          Confirmados: 1,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Ibateguara",
          Confirmados: 1,
          Óbitos: 1,
          Letalidade: 100 + "%"
        },
        {
          Cidade: "Limoeiro de Anadia",
          Confirmados: 1,
          Óbitos: 1,
          Letalidade: 100 + "%"
        },
        {
          Cidade: "Maceió",
          Confirmados: 645,
          Óbitos: 24,
          Letalidade: 3.7 + "%"
        },
        {
          Cidade: "Maragogi",
          Confirmados: 5,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Marechal Dedoro",
          Confirmados: 16,
          Óbitos: 2,
          Letalidade: 12.5 + "%"
        },

        {
          Cidade: "Maribondo",
          Confirmados: 2,
          Óbitos: 1,
          Letalidade: 50 + "%"
        },
        {
          Cidade: "Matriz do Camaragibe",
          Confirmados: 1,
          Óbitos: 1,
          Letalidade: 100 + "%"
        },
        { Cidade: "Murici", Confirmados: 17, Óbitos: 0, Letalidade: 0 + "%" },
        {
          Cidade: "Olho D'Água das Flores",
          Confirmados: 1,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Palestina",
          Confirmados: 1,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Palmeira dos Índios",
          Confirmados: 6,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Paripueira",
          Confirmados: 1,
          Óbitos: 1,
          Letalidade: 100 + "%"
        },
        {
          Cidade: "Penedo",
          Confirmados: 1,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Piaçabuçu",
          Confirmados: 2,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        { Cidade: "Pilar", Confirmados: 4, Óbitos: 0, Letalidade: 0 + "%" },
        {
          Cidade: "Porto Calvo",
          Confirmados: 2,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Porto Real do Colégio",
          Confirmados: 1,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Rio Largo",
          Confirmados: 20,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "Santa Luzia do Norte",
          Confirmados: 4,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "São Miguel dos Campos",
          Confirmados: 5,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        {
          Cidade: "São Miguel dos Milagres",
          Confirmados: 1,
          Óbitos: 1,
          Letalidade: 100 + "%"
        },
        {
          Cidade: "São Sebastião",
          Confirmados: 1,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        { Cidade: "Satuba", Confirmados: 7, Óbitos: 0, Letalidade: 0 + "%" },
        {
          Cidade: "União dos Palmares",
          Confirmados: 3,
          Óbitos: 0,
          Letalidade: 0 + "%"
        },
        { Cidade: "Viçosa", Confirmados: 1, Óbitos: 1, Letalidade: 100 + "%" }
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
<style scoped>
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
</style>