<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
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
          pointBackgroundColor: "#f49e39"
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
          pointBackgroundColor: "#3597db"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 7
        }
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              parser: "DD/MM/YYYY",
              unit: "day",
              unitStepSize: 2,
              displayFormats: {
                day: "D/M"
              }
            }
          }
        ]
      }
    }
  }),

  methods: {
    readFile() {
      let vm = this;
      this.$papa.parse("./state.csv", {
        download: true,
        complete: function(results) {
          var dates = [];
          var confirmed = [];
          var deaths = [];
          var flag = false;
          results.data.forEach(el => {
            if (el[1] === "AL") {
              if (el[4] != 0 || el[6] != 0) {
                flag = true;
              }
              if (flag) {
                /*var mes = el[2].split("-")[1];
                var dia = el[2].split("-")[2];
*/
                dates.push(el[2]);
                //new Date('2013-03-10T02:00:00Z');
                confirmed.push(el[4]);
                deaths.push(el[6]);
              }
              /*db = el.slice(38)
                        vm.chartdata.labels = db;*/
            }
          });
          vm.chartdata.labels = dates;
          vm.chartdata.datasets[0].data = confirmed;
          vm.chartdata.datasets[1].data = deaths;
          //console.log(dates, confirmed);
          vm.renderChart(vm.chartdata, vm.options);
        }
      });
    }
  },

  mounted() {
    this.readFile();
  }
};
</script>

<style>
#line-chart {
  height: 300px !important;
}
</style>