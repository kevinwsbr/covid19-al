<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["type"],
  data: () => ({
    chartValues: [],
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
          label: "Casos acumulados",
          data: [],
          borderColor: "#f49e39",
          backgroundColor: "rgba(244, 158, 57, .5)",
          fill: true,
          borderWidth: 4,
          pointRadius: 0,
          pointBorderColor: "#f49e39",
          pointBackgroundColor: "#f49e39",
        });
      } else if (this.type === "deaths") {
        datasets.push({
          label: "Óbitos acumulados",
          data: [],
          borderColor: "#3597db",
          backgroundColor: "rgba(53, 151, 219, .5)",
          fill: true,
          pointStyle: "circle",
          pointBorderColor: "#3597db",
          borderWidth: 4,
          pointRadius: 0,
          pointBackgroundColor: "#3597db",
        });
      }
      return datasets;
    },
  },

  methods: {
    async fetchData() {
      await this.axios
        .get("https://api.kevinws.com/stats/charts")
        .then((response) => {
          this.chartValues = response.data;
        });
    },
    async populateChart() {
      let dates = [];
      let confirmed = [];
      let deaths = [];

      await this.fetchData();
      if (this.type === "confirmedCases") {
        this.chartValues.forEach((day) => {
          if (day.totalCases > 0) {
            dates.push(day.date);
            confirmed.push(day.totalCases);
          }
        });

        this.currentDataset[0].data = confirmed;
      } else if (this.type == "deaths") {
        this.chartValues.forEach((day) => {
          if (day.totalDeaths > 0) {
            dates.push(day.date);
            deaths.push(day.totalDeaths);
          }
        });

        this.currentDataset[0].data = deaths;
      }

      let chartdata = {
        labels: dates,
        datasets: this.currentDataset,
      };
      this.renderChart(chartdata, this.options);
    },
  },

  async mounted() {
    await this.populateChart();
  },
};
</script>

<style>
#line-chart {
  height: 300px !important;
}
</style>
