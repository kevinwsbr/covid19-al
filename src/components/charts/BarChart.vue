<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BarChart",
  extends: Bar,
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
          label: function(tooltipItem, data) {
            let label = data.datasets[tooltipItem.datasetIndex].label || "";

            if (label) {
              label += ": ";
            }
            label += tooltipItem.yLabel.toFixed(2).replace(/\.0+$/,'');
            return label;
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
          label: "Novos casos",
          data: [],
          backgroundColor: "#f49e39",
          order: 2,
        });
      } else if (this.type === "deaths") {
        datasets.push({
          label: "Novos óbitos",
          data: [],
          backgroundColor: "#3597db",
          order: 2,
        });
      }
      datasets.push({
        label: "Média móvel",
        data: [],
        fill: false,
        borderColor: this.type === "deaths" ? "#1a4b6d" : "#7a4f1c",
        backgroundColor: this.type === "deaths" ? "#1a4b6d" : "#7a4f1c",
        radius: 0,
        borderWidth: 3,
        order: 1,
        // Changes this dataset to become a line
        type: "line",
      });
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
            confirmed.push(day.newCases);
          }
        });

        this.currentDataset[0].data = confirmed;
      } else if (this.type == "deaths") {
        this.chartValues.forEach((day) => {
          if (day.totalDeaths > 0) {
            dates.push(day.date);
            deaths.push(day.newDeaths);
          }
        });

        this.currentDataset[0].data = deaths;
      }

      this.calcmob(this.currentDataset[0].data);

      let chartdata = {
        labels: dates,
        datasets: this.currentDataset,
      };

      this.renderChart(chartdata, this.options);
    },
    movingAvg(array, count) {
      // calculate average for subarray
      var avg = function(array) {
        var sum = 0,
          count = 0,
          val;
        for (var i in array) {
          val = array[i];
          sum += val;
          count++;
        }

        return sum / count;
      };

      var result = [],
        val;

      // pad beginning of result with null values
      for (var i = 0; i < count - 1; i++) result.push(null);

      // calculate average for each subarray and add to result
      for (let i = 0, len = array.length - count; i <= len; i++) {
        val = avg(array.slice(i, i + count));
        if (isNaN(val)) result.push(null);
        else result.push(val);
      }

      return result;
    },
    async calcmob(data) {
      let t = [...data];
      console.log(this.movingAvg(t, 7));
      this.currentDataset[1].data = this.movingAvg(t, 7);
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
