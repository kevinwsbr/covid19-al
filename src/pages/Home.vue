<template>
  <section class="main">
    <section class="synthesis mb-3">
      <info-section :cards="infoCards" />
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
</template>

<script>
import Info from "../components/sections/Info";
import Cases from "../components/sections/Cases";
import Deaths from "../components/sections/Deaths";
import Beds from "../components/sections/Beds";

export default {
  name: "Home",
  components: {
    "cases-section": Cases,
    "info-section": Info,
    "deaths-section": Deaths,
    "beds-section": Beds,
  },
  data() {
    return {
      cities: [],
      beds: [],
      fetchedData: [],
    };
  },
  computed: {
    infoCards() {
      let cards = [
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
      if (this.fetchedData.stats) {
        cards[0].values.push({
          description: "Casos confirmados",
          value: this.fetchedData.stats.confirmedCases | 0,
        });

        cards[0].values.push({
          description: "Novos casos",
          value: this.fetchedData.stats.newCases | 0,
        });

        cards[0].values.push({
          description: "Casos recuperados",
          value: this.fetchedData.stats.recoveredCases | 0,
        });

        cards[0].values.push({
          description: "Casos notificados",
          value: this.fetchedData.stats.totalCases | 0,
        });

        cards[0].values.push({
          description: "Casos suspeitos",
          value: this.fetchedData.stats.suspiciousCases | 0,
        });

        cards[0].values.push({
          description: "Casos descartados",
          value: this.fetchedData.stats.discardedCases | 0,
        });

        cards[1].values.push({
          description: "Óbitos",
          value: this.fetchedData.stats.deaths | 0,
        });

        cards[1].values.push({
          description: "Novos óbitos",
          value: this.fetchedData.stats.newDeaths | 0,
        });

        cards[1].values.push({
          description: "Letalidade",
          percentage: true,
          value: this.fetchedData.stats.letality,
        });

        cards[1].values.push({
          description: "Mortalidade",
          text: true,
          value: this.fetchedData.stats.mortality,
        });
      }

      return cards;
    },
  },
  methods: {
    async fetchData() {
      await this.axios
        .get("https://api.kevinws.com/stats/")
        .then((response) => {
          this.fetchedData = response.data;

          this.cities = this.fetchedData.cities;
          this.beds = this.fetchedData.beds;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss"></style>
