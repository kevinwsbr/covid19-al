<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: ["chartdata"],
  data: () => ({
    options: {
      title: {
        display: true,
        text: "",
        fontSize: 14,
        padding: 8,
        fontFamily: '"Open Sans", sans-serif'
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        padding: 8,
        labels: {
          usePointStyle: true,
          boxWidth: 9
        }
      }
    }
  }),
  mounted() {
    this.options.title.text = this.chartdata.datasets[0].title;

    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style>
.chartjs-render-monitor {
  max-height: 300px;
}
</style>