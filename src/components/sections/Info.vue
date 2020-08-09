<template>
  <div>
    <b-row class="resume-card mb-4">
      <b-col>
        <b-card>
          <b-row>
            <b-col cols="6" lg="4">
              teste
            </b-col>
            <b-col cols="6" lg="4">
              teste
            </b-col>
            <b-col cols="6" lg="4">
              teste
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
}
</style>
