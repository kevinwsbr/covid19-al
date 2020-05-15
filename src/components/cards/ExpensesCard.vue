<template>
  <section>
    <b-card header-tag="header">
      <template v-slot:header>
        <div class="title-container my-auto">
          <h2 class="mb-0">Despesas com covid 19</h2>
        </div>
      </template>
      <div v-if="!chartData.length">
        <finances-chart :chartData="chartData"></finances-chart>
      </div>
    </b-card>
  </section>
</template>

<script>
import FinancesPie from "../charts/FinancesPie";

export default {
  name: "ExpensesCard",
  props: ["chartData"],
  components: {
    "finances-chart": FinancesPie,
  },
  mounted() {
    console.log("ec", this.chartData);
  },
};
</script>

<style lang="scss" scoped></style>
