<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BarChart",
  extends: Bar,
  props: ["type"],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 7,
        },
      },
      tooltips: {
        callbacks: {
          title: function(tooltipItem) {
            return tooltipItem[0].xLabel
              .split("-")
              .reverse()
              .join("/")
              .replace("/2020", "");
          },
        },
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
            type: "time",
            ticks: {
              fontColor: "#8d8e90",
              fontSize: 11,
            },
            gridLines: {
              display: true,
              color: "#f1f3f6",
            },
            time: {
              parser: "YYYY-MM-DD",
              unit: "day",
              unitStepSize: 3,
              displayFormats: {
                day: "DD/MM",
              },
            },
          },
        ],
      },
    },
  }),
  computed: {
    currentDataset() {
      let datasets = [];
      if (this.type === "confirmedCases") {
        datasets.push({
          label: "Confirmados",
          data: [],
          backgroundColor: "#f49e39",
        });
      } else if (this.type === "deaths") {
        datasets.push({
          label: "Óbitos",
          data: [],
          backgroundColor: "#3597db",
        });
      }
      return datasets;
    },
  },
  methods: {
    readFile() {
      let vm = this;

      this.$papa.parse("./state.csv", {
        download: true,
        complete: function(results) {
          let dates = [];
          let deaths = [];
          let confirmed = [];
          let flag = false;

          if (vm.type === "confirmedCases") {
            results.data.forEach((el) => {
              if (el[1] === "AL") {
                if (el[4] != 0 || el[6] != 0) {
                  flag = true;
                }
                if (flag) {
                  dates.push(el[2]);
                  confirmed.push(el[3]);
                }
              }
            });

            vm.currentDataset[0].data = confirmed;
          } else if (vm.type == "deaths") {
            results.data.forEach((el) => {
              if (el[1] === "AL") {
                if (el[3] != 0 || el[5] != 0) {
                  flag = true;
                }
                if (flag) {
                  dates.push(el[2]);
                  deaths.push(el[5]);
                }
              }
            });

            vm.currentDataset[0].data = deaths;
          }

          let chartdata = {
            labels: dates,
            datasets: vm.currentDataset,
          };
          vm.renderChart(chartdata, vm.options);
        },
      });
    },
  },

  mounted() {
    this.readFile();
  },
};
</script>

<style>
#line-chart {
  height: 300px !important;
}
</style>
