<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
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
              labelString: "Registros acumulados",
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
              unitStepSize: 1,
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
          borderColor: "#f49e39",
          borderWidth: 2.5,
          backgroundColor: "rgba(244, 158, 57, .5)",
          fill: true,
          pointStyle: "circle",
          pointBorderColor: "#f49e39",
          pointRadius: 2,
          pointBackgroundColor: "#f49e39",
        });
      } else if (this.type === "deaths") {
        datasets.push({
          label: "Óbitos",
          data: [],
          borderColor: "#3597db",
          borderWidth: 2.5,
          backgroundColor: "rgba(53, 151, 219, .5)",
          fill: true,
          pointStyle: "circle",
          pointBorderColor: "#3597db",
          pointRadius: 2,
          pointBackgroundColor: "#3597db",
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
                  confirmed.push(el[4]);
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
                  deaths.push(el[6]);
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
