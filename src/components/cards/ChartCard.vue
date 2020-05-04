<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["type"],
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
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
        },
        {
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
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 7,
        },
      },
      scales: {
        yAxes: [
          {
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

          if (vm.type === "totalCases") {
            results.data.forEach((el) => {
              if (el[1] === "AL") {
                if (el[4] != 0 || el[6] != 0) {
                  flag = true;
                }
                if (flag) {
                  dates.push(el[2]);
                  confirmed.push(el[4]);
                  deaths.push(el[6]);
                }
              }
            });

            vm.chartdata.datasets[0].data = confirmed;
            vm.chartdata.datasets[1].data = deaths;
          } else {
            results.data.forEach((el) => {
              if (el[1] === "AL") {
                if (el[3] != 0 || el[5] != 0) {
                  flag = true;
                }
                if (flag) {
                  dates.push(el[2]);
                  confirmed.push(el[3]);
                  deaths.push(el[5]);
                }
              }
            });

            vm.chartdata.datasets[0].data = confirmed;
            vm.chartdata.datasets.splice(1);
          }

          vm.chartdata.labels = dates;

          vm.renderChart(vm.chartdata, vm.options);
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
