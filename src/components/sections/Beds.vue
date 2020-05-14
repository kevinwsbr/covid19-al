<template>
  <div>
    <b-row>
      <b-col>
        <h2 class="section-title purple">Disponibilidade de leitos</h2>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col class="mb-4">
        <beds-charts v-if="beds" :total="total" :separated="separated" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PieChartCard from "../cards/PieChartCard";
export default {
  name: "Beds",
  props: ["beds"],
  computed: {
    separated() {
      return this.beds.slice(-3);
    },
    total() {
      return this.beds[0];
    },
  },
  components: {
    "beds-charts": PieChartCard,
  },
};
</script>

<style lang="scss" scoped></style>
