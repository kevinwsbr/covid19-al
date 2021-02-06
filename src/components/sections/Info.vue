<template>
  <div>
    <b-row class="resume-card mb-4">
      <b-col>
        <b-card>
          <b-row class="no-gutters">
            <b-col class="green" cols="12" md="4">
              <span>585.215</span>
              <small>casos recuperados</small>
            </b-col>
            <b-col cols="12" md="4">
              <span>585.215</span>
              <small>casos ativos</small>
            </b-col>
            <b-col class="status green" cols="12" md="4">
              <div class="text">
                <small>Tendência</small>
                <span>Queda</span>
              </div>
              <font-awesome-icon icon="arrow-down" size="3x" />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col class="mb-2" cols="12">
        <vac-card :data="cards[2]" />
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col class="mb-3" cols="12" md="6" v-for="card in cards.slice(0, 2)" :key="card.name">
        <info-card :data="card" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import InfoCard from "../cards/InfoCard";
import VaccinationCard from "../cards/VaccinationCard";

export default {
  name: "Info",
  props: ["cards"],
  components: {
    "info-card": InfoCard,
    "vac-card": VaccinationCard
  },
};
</script>

<style lang="scss" scoped>
.resume-card {
  .green {
    span, small, svg {
      color: #28a745;
    }
    
  }
  .blue {
    span, small, svg{
      color: #17a2b8;
    }
    
  }
  .red {
    span, small, svg {
      color: #dc3545;
    }
    
  }
  .card {
    .card-body {
      padding: 0;
    }
    [class*="col-"] {
      @media screen and (max-width: 767px) {
        padding: 0.7rem 1rem;
      }
      @media screen and (min-width: 768px) {
        padding: 1.25rem;
      }
    }
    .row {
      div:last-of-type {
        span {
          margin-bottom: 9px;
          line-height: 15px;
        }
      }
      div:not(:last-of-type) {
        span {
          margin-top: 8px;
        }
      }
    }
    span {
      display: block;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 0.5px;
    }
    small {
      letter-spacing: -0.2px;
      font-weight: 600;
    }
    .status {
      @media screen and (max-width: 767px) {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
      @media screen and (min-width: 768px) {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        align-self: flex-end;
        //color: rgb(255 255 255 / 0.7);
      }
    }
  }
}
</style>
