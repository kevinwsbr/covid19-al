<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BarChart",
  extends: Bar,
  props: ["type"],
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "Confirmados",
          data: [],
          backgroundColor: "#f49e39",
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
            //vm.chartdata.datasets[1].data = deaths;
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
