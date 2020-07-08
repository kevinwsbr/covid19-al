<script>
import { HorizontalBar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
export default {
  extends: HorizontalBar,
  components: {
    //ChartDataLabels,
  },
  data: () => ({
    comorbities: [],
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "Número de casos",
          backgroundColor: "#3497db",
          data: [],
          categoryPercentage: 1,
          barPercentage: 0.7,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      layout: {
        padding: {
          right: 25,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
      plugins: {
        datalabels: {
          color: "black",
          anchor: "end",
          align: "right",
          display: true,
        },
      },
    },
  }),
  methods: {
    async populateChart() {
      await this.fetchData();
      this.comorbities.values.forEach((el) => {
        this.chartdata.labels.push(el.comorbidity);
        this.chartdata.datasets[0].data.push(el.value);
      });

      this.renderChart(this.chartdata, this.options);
    },
    async fetchData() {
      await this.axios
        .get("https://api.kevinws.com/comorbidities", {})
        .then((response) => {
          //console.log("resp", response.data);
          this.comorbities = response.data;
        });
    },
  },
  async mounted() {
    this.addPlugin(ChartDataLabels);
    this.populateChart();
  },
};
</script>

<style></style>
