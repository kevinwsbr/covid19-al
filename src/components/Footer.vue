<template>
  <footer class="mb-5">
    <b-row>
      <b-col class="text-center">
        <span class="d-block mb-3"
          >Fontes: Ministério da Saúde, Secretaria da Saúde do Estado de
          Alagoas, Secretarias Municipais de Saúde</span
        >
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
    font-weight: 700;
    letter-spacing: -0.84px;
    color: #172b3e;
    &:first-of-type {
      font-weight: 500;
      color: #8498ae;
    }
  }

  @media screen and (max-width: 420px) {
    span:first-of-type {
      font-size: 0.8rem;
    }
  }
}
</style>
