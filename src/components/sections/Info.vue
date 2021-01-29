<template>
  <div>
    <b-row class="mb-4">
      <b-col class="mb-2" cols="12">
        <vac-card :data="cards[2]" />
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col class="mb-3" cols="12" md="6" v-for="card in cards.slice(0, 2)" :key="card.name">
        <info-card :data="card" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import InfoCard from "../cards/InfoCard";
import VaccinationCard from "../cards/VaccinationCard";

export default {
  name: "Info",
  props: ["cards"],
  components: {
    "info-card": InfoCard,
    "vac-card": VaccinationCard
  },
};
</script>

<style lang="scss" scoped></style>
