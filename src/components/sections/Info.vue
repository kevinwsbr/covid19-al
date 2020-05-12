<template>
  <div>
    <b-row>
      <b-col>
        <h2 class="section-title">Síntese geral</h2>
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col cols="12" md="6" v-for="card in cards" :key="card.name">
        <info-card :data="card" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import InfoCard from "../cards/InfoCard";
export default {
  name: "Info",
  props: ["cards"],
  components: {
    "info-card": InfoCard,
  },
};
</script>

<style lang="scss" scoped></style>
