<template>
  <b-card>
    <div class="title">
      <span v-if="data.name" :style="{ color: data.color }">{{
        data.name
      }}</span>
    </div>
    <b-row>
      <b-col cols="12" sm="6">
        <div class="value">
          <div v-if="!data.values[0]" class="placeholder wave">
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div v-else>
            <span>{{
              data.values[0].value | number("0,0", { thousandsSeparator: "." })
            }}</span>
            <small>{{ data.values[0].description }}</small>
          </div>
        </div>
      </b-col>
      <b-col cols="12" sm="6">
        <div class="value">
          <div v-if="!data.values[1]" class="placeholder wave">
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div v-else>
            <span>{{ data.values[1].value }}%</span>
            <small>{{ data.values[1].description }}</small>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "VaccinationCard",
  props: ["data"],
  mounted: function() {},
};
</script>
<style lang="scss" scoped>
.value {
  margin-top: 1rem;
  span {
    display: block;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: #242a2f;
  }
  small {
    font-weight: 600;
    color: #73777d;
    letter-spacing: -0.5px;
  }
}

.title {
  margin-bottom: 0.5rem;
  span {
    font-weight: 800;
    letter-spacing: -0.02rem;
    text-transform: uppercase;
  }
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
  margin-top: 15px;
  height: 25px;
  width: 60%;
}

.placeholder .line:nth-child(2) {
  margin-top: 5px;
  width: 100%;
  height: 10px;
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
