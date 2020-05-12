<template>
  <div>
    <b-row>
      <b-col>
        <h2 class="section-title">Disponibilidade de leitos</h2>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col class="mb-4">
        <beds-charts v-if="beds" :pie="beds" :bar="beds" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PieChartCard from "../cards/PieChartCard";
export default {
  name: "Beds",
  props: ["beds"],
  components: {
    "beds-charts": PieChartCard
  },
};
</script>

<style lang="scss" scoped></style>
