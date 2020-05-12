<template>
  <header>
    <b-row class="mt-5 mb-4 header-row">
      <b-col>
        <img
          draggable="false"
          alt="Brasão do Estado de Alagoas"
          src="../assets/al.svg"
        />
        <h1>Painel COVID-19 Alagoas</h1>
        <div class="subtitle-container">
          <span>Atualizado em </span>
          <div v-if="!date" class="placeholder wave">
            <div class="line"></div>
          </div>
          <span class="variable">{{ date }}</span> <span> às </span>
          <div v-if="!time" class="placeholder wave">
            <div class="line"></div>
          </div>
          <span class="variable">{{ time }}</span
          ><span>h</span>
        </div>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["date", "time"],
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
}

@media screen and (max-width: 576px) {
  .mb-4 {
    margin-bottom: 1rem !important;
  }
}

.variable,
.placeholder {
  margin: 0 0.2rem;
}

.placeholder {
  width: 40px;
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

.placeholder {
  float: left;
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

header {
  h1 {
    font-weight: 800;
    margin-bottom: -0.3rem;
    font-size: 1.3rem;
    line-height: 34px;
    letter-spacing: -0.05rem;
    color: #172b3e;
  }
  h2 {
    margin-bottom: 0;
  }
  span {
    color: #607d8b;
    font-weight: 500;
    letter-spacing: -0.02rem;
    float: left;
  }
  img {
    max-height: 55px;
    float: left;
    margin-right: 0.8em;
  }
}

@media screen and (max-width: 375px) {
  header {
    text-align: center;
    .subtitle-container {
      width: 222px;
      margin-left: 50%;
      transform: translateX(-50%);
      height: 25px;
    }
    img {
      float: none;
      margin: 0 auto;
    }
    h1 {
      font-size: 1.2rem;
      margin-bottom: -5px;
    }
  }
}

@media screen and (max-width: 420px) {
  h1 {
    font-size: 1.3rem;
    margin-bottom: -5px;
  }
  h2 {
    text-align: center;
  }
  header {
    .header-row {
      margin: 2rem 0 !important;
    }
  }
  .buttons-container {
    height: 30px;
    display: flex;
    justify-content: center;
    margin-top: 0.3em;
    button {
      border-radius: 1rem;
      padding: 1em;
      line-height: 0.2em;
    }
  }
}

@media screen and (min-width: 420px) {
  header {
    h1 {
      font-size: 1.5rem;
    }
  }
  .title-container {
    float: left;
    h2 {
      padding: 0.2em 0;
    }
  }
  .buttons-container {
    float: right;
  }
}
</style>
