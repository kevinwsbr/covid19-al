<template>
  <div>
    <h3>Leitos clínicos</h3>
    <b-progress :max="max" height="2rem">
      <b-progress-bar :value="value">
        <strong>{{ calculatePercentage }} ocupados</strong>
        <span class="mt-0">{{ value + "/" + max }}</span>
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 10,
      max: 50,
    };
  },
  computed: {
    calculatePercentage() {
      return ((this.value / this.max) * 100).toFixed(0) + "%";
    },
  },
};
</script>
<style lang="scss" scoped>
h3 {
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
    line-height: 1.2;
}
</style>
