<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["chartdata"],
  computed: {
    chartContent() {
      return {
        labels: ["Utilizados", "Disponíveis"],
        datasets: [
          {
            backgroundColor: ["#9d5cb6", "#e9ecef"],
            data: [
              this.chartdata.data[0],
              this.chartdata.data[1] - this.chartdata.data[0],
            ],
            title: this.chartdata.title,
            borderWidth: 1,
          },
        ],
      };
    },
  },
  data: () => ({
    options: {
      title: {
        display: true,
        text: "Leitos disponíveis",
        fontSize: 14,
        padding: 8,
        fontFamily: '"Open Sans", sans-serif',
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        padding: 8,
        labels: {
          usePointStyle: true,
          boxWidth: 9,
        },
      },
    },
  }),
  mounted() {
    if (this.chartdata) this.renderChart(this.chartContent, this.options);
  },
};
</script>

<style>
.chartjs-render-monitor {
  max-height: 300px;
}
</style>
