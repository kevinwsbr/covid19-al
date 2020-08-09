<template>
  <div>
    <b-row class="resume-card mb-4">
      <b-col>
        <b-card>
          <b-row>
            <b-col cols="6" lg="4">
              <span>585.215</span>
              <small>casos recuperados</small>
            </b-col>
            <b-col cols="6" lg="4">
              <span>585.215</span>
              <small>casos ativos</small>
            </b-col>
            <b-col class="info" cols="6" lg="4">
              <small>Tendência</small>
              <span>Queda</span>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col
        class="mb-3"
        cols="12"
        md="6"
        v-for="card in cards"
        :key="card.name"
      >
        <info-card :data="card" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import InfoCard from "../cards/InfoCard";
export default {
  name: "Info",
  props: ["cards"],
  components: {
    "info-card": InfoCard,
  },
};
</script>

<style lang="scss" scoped>
.resume-card {
  .card {
    background: #28a745;
    span {
      display: block;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.5px;
      color: rgb(255 255 255 / .95);
    }
    small {
      font-weight: 600;
      color: rgb(255 255 255 / .85);
      letter-spacing: -0.2px;
    }
    .info {
      background: red;
    }
  }
}
</style>
