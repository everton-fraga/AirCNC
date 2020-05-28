//GET, POST, PUT, DELETE
//GET => qdo eu quero buscar uma informação do backend
//POST => qdo eu quero criar uma nova informação no backend
//        (não é possivel testar pelo navegador, pra isso, uso o Insomnia,
//                                 aí uso para os outros métodos tb)
//PUT => qdo eu quero editar uma informação existente no backend
//DELETE => qdo eu quero deletar uma informação no backend

//Parametros, como pegar?
//req.query => Acessar query params (para filtros)
// app.get("/users", (req, res) => {
//   return res.json({ idade: req.query.idade });
// });
//req.params = Acessa rout params (para edição, delete)
// app.put("/users/:id", (req, res) => {
//   return res.json({ idade: req.params.id });
// });
//req.body = Acessa corpo da requisicao (para criacao,edição de registros)
// app.post("/users", (req, res) => {
//   return res.json(req.body);
// });
//req.header = Acessa header da requisicao (para valores de contexto, autenticacao, idioma do usuario, etc)
// app.post("/users", (req, res) => {
//   return res.json(req.header);
// });

const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);
routes.get("/sessions", SessionController.index); //customizado, mostra os usuarios

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;
