<template>
  <section v-if="chartData" class="about mb-4">
    <expenses-card  :chartData="chartData" />
  </section>
</template>
<script>
import ExpensesCard from "../components/cards/ExpensesCard";

export default {
  name: "Expenses",
  data() {
    return {
      categories: [],
      expenses: [],
      chartData: [],
    };
  },
  components: {
    "expenses-card": ExpensesCard,
  },

  methods: {
    async fetchData() {
      await this.axios
        .get("http://transparencia.al.gov.br/despesa/json-despesa-covid19", {
          params: {
            order: "asc",
            limit: 999,
          },
        })
        .then((response) => {
          console.log("resp", response.data);
          this.expenses = response.data;
        });
    },
    extractCategories(data) {
      this.categories = data
        .map((el) => el.categoria)
        .filter((el, index, self) => self.indexOf(el) === index);
    },
    formatName(text) {
      text = text
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
      return text;
    },
    fetchExpenses() {
      if (this.categories) {
        let total;
        let labels = [];
        let values = [];
        this.categories.forEach((el) => {
          total = 0;
          this.expenses.rows.forEach((element) => {
            if (element.categoria == el) {
              total += parseFloat(
                element.total_empenhado.replace(/\./g, "").replace(/,/g, ".")
              );
            }
          });
          labels.push(this.formatName(el));
          values.push(total.toFixed(2));
        });
        this.chartData = {
          labels: labels,
          datasets: {
            data: values,
          },
        };
        console.log("cd", this.chartData);
      }
    },
  },
  async mounted() {
    await this.fetchData();
    await this.extractCategories(this.expenses.rows);
    this.fetchExpenses();
    //if (this.expenses) console.log(this.extractCategories(this.expenses.rows));
  },
};
</script>
