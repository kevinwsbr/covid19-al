<template>
  <section class="about mb-4">
    <b-row>
      <b-col cols="12" lg="7">
        <expenses-card />
      </b-col>
      <b-col cols="12" lg="5">
        <expenses-bar-card />
      </b-col>
    </b-row>
  </section>
</template>
<script>
import ExpensesCard from "../components/cards/ExpensesCard";
import ExpensesBarCard from "../components/cards/ExpensesBarCard";

export default {
  name: "Expenses",
  components: {
    "expenses-card": ExpensesCard,
    "expenses-bar-card": ExpensesBarCard,
  },
  async mounted() {
    //if (this.expenses) console.log(this.extractCategories(this.expenses.rows));
  },
};
</script>
