<template>
  <footer class="mb-5">
    <b-row>
      <b-col class="text-center">
        <span class="d-block">
          Painel desenvolvido por
          <a href="https://kevinws.com">Kevin Washington</a>
          , v{{ version }}
        </span>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["version"],
};
</script>

<style lang="scss" scoped>
footer {
  span {
    font-weight: 600;
    letter-spacing: -0.84px;
    color: #172b3e;
  }
}
</style>
