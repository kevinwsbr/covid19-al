<template>
  <b-card>
    <div class="title">
      <small>{{ data.title }}</small>
    </div>
    <div v-if="!data" class="placeholder wave">
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div v-if="data" class="value" :style="{ '--cardColor': data.color }">
      <span>{{ data.value }}</span>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "InfoCard",
  props: ["data"],
  mounted: function() {},
};
</script>
<style lang="scss" scoped>
.value {
  margin-right: 12px;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.5px;
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

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
.card-map {
  padding: 0;
}
* {
  font-family: "Open Sans", sans-serif;
}
h2 {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
}
.card {
  border-radius: 1rem;
  box-shadow: 0 4px 6px 0 rgba(31, 70, 88, 0.04);
  background: #fff;
  border: 1px solid #dbe9f5;
}
@media screen and (max-width: 576px) {
  .card-body {
    padding: 0.75rem 1.25rem !important;
  }
}

.placeholder {
  width: 80%;
  height: 100%;
}

.placeholder .line {
  margin-top: 5px;
  height: 16px;
}

.placeholder .line:nth-child(2) {
  margin-top: 10px;
  height: 40px;
  width: 50%;
}

.placeholder.wave div {
  animation: wave 1s infinite linear forwards;
  -webkit-animation: wave 1s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
}

@keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

@-webkit-keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
