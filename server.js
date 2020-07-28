const express = require("express");
const path = require("path");
const app = express();

const configs = {
  caminho: "dist", //Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos.
  forcarHTTPS: true, //Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL
  port: process.env.PORT || 3000,
};

if (configs.forcarHTTPS)
  //Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
  app.use(function(req, res, next) {
    if (req.get("X-Forwarded-Proto") !== "https") {
      res.redirect("https://" + req.get("Host") + req.url);
    } else next();
  });
// app.use((req, res, next) => {
//   //Cria um middleware onde todas as requests passam por ele
//   //console.log(JSON.stringify(req.headers))
//   //console.log(req.headers["x-forwarded-proto"])
//   res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
//   //if (req.headers["x-forwarded-proto"] == "http") //Checa se o protocolo informado nos headers é HTTP
//   //else //Se a requisição já é HTTPS
//   //    next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
// });

app.use(express.static(configs.caminho)); //Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.

app.get("*", (req, res) => {
  // O wildcard '*' serve para servir o mesmo index.html independente do caminho especificado pelo navegador.
  res.sendFile(path.join(__dirname, configs.caminho, "index.html"));
});

app.listen(configs.port, () => {
  console.log(`Escutando na ${configs.port}!`);
});
