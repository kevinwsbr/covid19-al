<script>
import { HorizontalBar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
export default {
  extends: HorizontalBar,
  components: {
    //ChartDataLabels,
  },
  computed: {
    suggestedLimit() {
      let max = 0;
      this.chartdata.datasets.forEach((set) => {
        let currentMax = set.data.reduce((a, b) => {
          return Math.max(Math.abs(a), Math.abs(b));
        });
        max = currentMax > max ? currentMax : max;
      });
      return max * 1.3;
    },
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          reverse: true,
          labels: {
            usePointStyle: true,
            boxWidth: 8,
          },
        },
        tooltips: {
          callbacks: {
            title: function(tooltipItem) {
              return tooltipItem[0].yLabel + " anos";
            },
            label: function(tooltipItem, data) {
              return (
                Math.abs(tooltipItem.xLabel) +
                " óbitos do gênero " +
                data.datasets[tooltipItem.datasetIndex].label.toLowerCase()
              );
            },
          },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                suggestedMin: -this.suggestedLimit,
                suggestedMax: this.suggestedLimit,
                display: false,
                stepSize: 20,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
        },
        plugins: {
          datalabels: {
            color: "black",
            anchor: function(value) {
              return value.dataset.data[value.dataIndex] <= 0 ? "start" : "end";
            },
            align: function(value) {
              return value.dataset.data[value.dataIndex] <= 0
                ? "left"
                : "right";
            },
            display: true,
            formatter: function(value) {
              return Math.abs(value);
            },
          },
        },
      };
    },
  },
  data: () => ({
    ages: [],
    chartdata: {
      datasets: [
        {
          data: [],
          backgroundColor: "#3288c3",
          label: "Masculino",
        },
        {
          data: [],
          backgroundColor: "#86c2e7",
          label: "Feminino",
        },
      ],
      labels: [
        "≥ 80",
        "70 - 79",
        "60 - 69",
        "50 - 59",
        "40 - 49",
        "30 - 39",
        "20 - 29",
        "10 - 19",
        "≤ 10",
      ],
    },
  }),
  methods: {
    async populateChart() {
      await this.fetchData();
      this.ages.values.forEach((el) => {
        this.chartdata.datasets[0].data.push(el.male);
        this.chartdata.datasets[1].data.push(-el.female);
      });

      this.renderChart(this.chartdata, this.options);
    },
    async fetchData() {
      await this.axios
        .get("https://api.kevinws.com/ages", {})
        .then((response) => {
          //console.log("resp", response.data);
          this.ages = response.data;
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
