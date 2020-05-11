<template>
  <div>
    <h3>{{ title }}</h3>
    <b-progress :max="available" height="2rem" variant="info">
      <b-progress-bar :value="used">
        <strong>{{ calculatePercentage }} ocupados</strong>
        <span class="mt-0">{{ used + "/" + available }}</span>
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  props: ["chartdata"],
  computed: {
    title() {
      return this.chartdata.datasets[0].title;
    },
    available() {
      return this.chartdata.datasets[0].data[1];
    },
    used() {
      return this.chartdata.datasets[0].data[0];
    },
    calculatePercentage() {
      return ((this.used / this.available) * 100).toFixed(0) + "%";
    },
  },
};
</script>
<style lang="scss" scoped>
h3 {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
}
</style>
