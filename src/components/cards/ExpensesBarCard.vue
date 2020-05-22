<template>
  <section>
    <b-card header-tag="header">
      <template v-slot:header>
        <div class="title-container my-auto">
          <h2 class="mb-0">Despesas totais</h2>
        </div>
      </template>
      <div>
        <finances-bar
          v-if="loaded"
          :chartdata="chartData"
          :options="options"
        ></finances-bar>
      </div>
    </b-card>
  </section>
</template>

<script>
import FinancesBar from "../charts/FinancesBar";

export default {
  name: "ExpensesBarCard",
  components: {
    "finances-bar": FinancesBar,
  },
  data() {
    return {
      loaded: false,
      expenses: [],
      categories: [],
      chartData: [],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "bottom",
          fontColor: "#172b3e",
          fontFamily: '"Open Sans", sans-serif',
          padding: 8,
          labels: {
            usePointStyle: true,
            boxWidth: 9,
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Novos registros",
                  fontFamily: "'Open Sans', sans-serif",
                  fontStyle: "600",
                },
                gridLines: {
                  display: true,
                  color: "#f1f3f6",
                },
                ticks: {
                  fontColor: "#8d8e90",
                  fontSize: 11,
                },
              },
            ],
            xAxes: [
              {
                offset: true,
                scaleLabel: {
                  display: true,
                  labelString: "Data de notificação",
                  fontFamily: "'Open Sans', sans-serif",
                  fontStyle: "600",
                },
                ticks: {
                  autoSkip: false,
                  maxRotation: 0,
                  minRotation: 0,
                  fontColor: "red",
                  fontSize: 11,
                },
                type: "time",
                gridLines: {
                  display: true,
                  color: "#f1f3f6",
                },
              },
            ],
          },
        },
      },
    };
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
        .map((el) => el.orgao_descricao)
        .filter((el, index, self) => self.indexOf(el) === index);
    },
    fetchExpenses() {
      if (this.categories) {
        let total;
        let labels = [];
        let values = [];
        this.categories.forEach((el) => {
          total = 0;
          this.expenses.rows.forEach((element) => {
            if (element.orgao_descricao == el) {
              total += parseFloat(
                element.total_empenhado.replace(/\./g, "").replace(/,/g, ".")
              );
            }
          });
          labels.push(el);
          values.push(total.toFixed(2));
        });
        this.chartData = {
          labels: labels,
          datasets: [
            {
              label: "kk eae",
              barPercentage: 0.5,
              barThickness: 6,
              maxBarThickness: 8,
              minBarLength: 2,
              data: values,
            },
          ],
        };
        console.log("cd", this.chartData);
      }
    },
  },

  async mounted() {
    this.loaded = false;
    try {
      await this.fetchData();
      await this.extractCategories(this.expenses.rows);
      this.fetchExpenses();
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped></style>
