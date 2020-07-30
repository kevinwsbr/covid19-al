<template>
  <section class="about-section mb-5">
    <b-card>
      <h2>Introdução</h2>
      <p>
        Este painel foi desenvolvido com o propósito de centralizar as
        informações sobre a situação epidemiológica da COVID-19 no estado de
        Alagoas.
      </p>

      <p>
        É importante ressaltar que este portal, apesar de reunir os dados
        emitidos pelos órgãos oficiais, não possui quaisquer vínculos com as
        Secretarias Municipais de Saúde, a Secretaria Estadual de Saúde de
        Alagoas ou com o Ministério da Saúde.
      </p>

      <h2>Atualizações</h2>
      <p>
        O processo de atualização dos dados sobre casos e óbitos confirmados por
        COVID-19 em Alagoas é realizado diariamente pela Secretaria Estadual de
        Saúde através das informações oficiais repassadas pelas Secretarias
        Municipais de Saúde dos 102 municípios do estado. Os dados fornecidos
        pelas secretarias são consolidados e disponibilizados publicamente todos
        os dias, em torno das 18h.
      </p>
      <p>
        Nos casos em que uma Secretaria Municipal emitir novos números após a
        divulgação do boletim epidemiológico diário estadual, os números
        individuais correspondentes ao município em questão serão atualizados
        isoladamente. Portanto, eventuais inconsistências entre os números de um
        município presentes no boletim estadual e os números encontrados neste
        portal se devem a essa dinâmica de atualização adotada - priorizando
        sempre os números mais atualizados.
      </p>
      <p>
        Em nível municipal, o dado do dia atual pode ser menor que o do dia
        anterior: isso acontece porque o município de notificação não é
        necessariamente o mesmo local de residência do caso ou óbito notificado.
      </p>
      <h2>Conceitos básicos</h2>
      <h3>Casos novos</h3>
      <p>
        Número de casos novos confirmados por COVID-19 que foram registrados
        pelas Secretarias Municipais e Estadual de Saúde em relação ao dia
        anterior.
      </p>

      <h3>Casos acumulados</h3>
      <p>
        Número total de casos confirmados por COVID-19 que foram registrados
        pelas Secretarias Municipais e Estadual de Saúde desde a data de
        confirmação do primeiro caso até o dia atual.
      </p>

      <h3>Casos recuperados</h3>
      <p>
        Segundo a Organização Mundial da Saúde, para os casos de COVID-19
        confirmados por critério laboratorial, considera-se como recuperados
        aqueles que tiveram dois resultados negativos para SARS-CoV-2 com pelo
        menos 1 dia de intervalo. Para os casos leves, a OMS estima que tempo
        entre o início da infecção e a recuperação dure até 14 dias.
      </p>
      <h3>Casos suspeitos</h3>
      <p>
        Número de casos notificados pelas Secretarias Municipais de Saúde para
        os quais ainda não houve resultado positivo para a COVID-19.
      </p>
      <h3>Casos notificados</h3>
      <p>
        Número total de casos notificados pelas Secretarias Municipais de Saúde.
        Engloba os casos acumulados, os casos descartados, os casos suspeitos,
        os óbitos e os casos recuperados.
      </p>

      <h3>Óbitos novos</h3>
      <p>
        Número de óbitos novos confirmados por COVID-19 que foram registrados
        pelas Secretarias Municipais e Estadual de Saúde em relação ao dia
        anterior.
      </p>

      <p>
        Reflete o número de óbitos reportados pelas secretarias de saúde na data
        em que tiveram a confirmação laboratorial ou clínico epidemiológica. Não
        reflete a data de ocorrência do óbito.
      </p>

      <h3>Óbitos acumulados</h3>
      <p>
        Número total de óbitos confirmados por COVID-19 que foram registrados
        pelas Secretarias Municipais e Estadual de Saúde desde a data de
        confirmação do primeiro óbito até o dia atual.
      </p>
      <h3>Coeficiente de incidência</h3>
      <p>
        Número de casos confirmados de COVID-19 por 100.000 habitantes, na
        população residente no local (município ou estado), no período
        considerado.
      </p>
      <h3>Coeficiente de mortalidade</h3>
      <p>
        Número de óbitos por doenças COVID-19, por 100 mil habitantes, na
        população residente no local (município ou estado), no ano considerado.
      </p>
      <h3>Taxa de letalidade</h3>
      <p>
        Número de óbitos confirmados de COVID-19 em relação ao total de casos
        confirmados, na população residente no local (município ou estado), no
        período considerado.
      </p>
      <h2>Fontes de dados</h2>
      <h4>Dados epidemiológicos</h4>
      <p>
        Secretaria Estadual de Saúde de Alagoas, Secretarias Municipais de Saúde
        e Ministério da Saúde.
      </p>
    </b-card>
  </section>
</template>

<script>
export default {
  name: "AboutCard",
};
</script>

<style lang="scss" scoped>
.about-section {
  h2 {
    color: #1b629e !important;
    text-align: left !important;
    font-size: 1.4rem;
    font-weight: 800;
  }
  h3 {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  h4 {
    margin-top: 0.7rem;
    font-size: 1rem;
    font-weight: 600;
  }
  p {
    font-size: 0.95rem;
    line-height: 1.4rem;
  }
}
</style>
