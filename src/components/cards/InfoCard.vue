<template>
  <b-card>
    <div class="title">
      <small>{{ data.title }}</small>
    </div>
    <div class="value" :style="{ '--cardColor': data.color }">
      <span>{{ data.value }}</span>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "InfoCard",
  props: ["data"],
  mounted: function() {}
};
</script>
<style lang="scss" scoped>
.value {
  margin-right: 12px;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -1.29px;
  color: var(--cardColor);
}
.title {
  margin-bottom: -5px; 
}
.title > small {
  font-weight: 600;
  letter-spacing: 0.01rem;
  text-transform: uppercase;
}
</style>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
.card-map {
  padding: 0;
}
* {
  font-family: "Open Sans", sans-serif;
}
h2 {
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
}
.card {
  border-radius: 1rem;
  box-shadow: 0 4px 6px 0 rgba(31, 70, 88, 0.04);
  background: #fff;
  border: 1px solid #dbe9f5;
}
</style>