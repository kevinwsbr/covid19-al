<template>
  <section class="table-section">
    <b-card header-tag="header">
      <template v-slot:header>
        <div class="d-flex justify-content-between">
          <div class="my-auto w-100">
            <h2 class=" mb-0">Casos por município</h2>
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
    </b-card>
  </section>
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
  mounted() {},
};
</script>

<style lang="scss" scoped>
.table-section {
  .card-body {
    padding: 0;
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

  .table thead th {
    font-weight: 600 !important;
    border: 0px !important;
    &:first-of-type {
      color: #fff !important;
    }
  }

  .table td {
    border-top: 1px solid #dbe9f5 !important;
  }
}
</style>
