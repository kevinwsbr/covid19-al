<template>
  <section class="map-section">
    <b-card header-tag="header">
      <template v-slot:header>
        <div class="title-container my-auto">
          <h2 class="mb-0">Mapa de {{ title }}</h2>
        </div>
      </template>
      <data-map :mapType="type" />
    </b-card>
  </section>
</template>

<script>
import DataMap from "../charts/DataMap";

export default {
  name: "MapCard",
  props: ["title", "type"],
  components: {
    'data-map': DataMap,
  },
};
</script>

<style lang="scss">
.map-section {
  .card-body {
    padding: 0;
  }

  .map-alert {
    height: 400px;
    color: #fff;
    background: rgba(26, 97, 156, 0.4);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    z-index: 5;
    width: 100%;
    position: absolute;

    span {
      line-height: 400px;
      font-size: 1.2em;
      font-weight: 600;
    }
  }

  .leaflet-container {
    z-index: 3;
    height: 400px !important;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  @media screen and (max-width: 576px) {
    .leaflet-container {
      height: 360px !important;
    }
    .map-alert {
      height: 360px;

      span {
        line-height: 360px;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
