<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: ["chartData"],
  computed: {
    chartContent() {
      return {
        labels: this.chartData.labels,
        datasets: [
          {
            data: this.chartData.datasets.data,
          },
        ],
      };
    },
  },
  data: () => ({
    chartdata: {
      datasets: [
        {
          data: [10, 20, 30],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Red", "Yellow", "Blue"],
    },
    options: {
      title: {
        display: true,
        text: "Leitos disponíveis",
        fontSize: 14,
        padding: 8,
        fontColor: "#172b3e",
        fontStyle: 600,
        fontFamily: '"Open Sans", sans-serif',
      },
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
      },
    },
  }),
  methods: {
    drawChart() {
      this.renderChart(this.chartData, this.options);
    },
  },
  async mounted() {
    await this.chartData;
    this.drawChart();
  },
};
</script>

<style>
.chartjs-render-monitor {
  max-height: 300px;
}
</style>
