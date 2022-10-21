const express = require("express");
const routes = express.Router();

routes.get("/atendimentos", atendimentosController.listar);
routes.get("/atendimentos/:id", atendimentosValidators.listarID, atendimentosController.listarID);
routes.post("/atendimentos",atendimentosValidators.cadastrar,  atendimentosController.cadastrar);


routes.get("/pacientes", pacientesController.listar);
routes.get("/pacientes/:id", pacientesValidators.listarID, pacientesController.listarID);
routes.post("/pacientes", pacientesValidators.cadastrar ,pacientesController.cadastrar);
routes.put("/pacientes/:id", pacientesValidators.atualizar, pacientesController.atualizar);
routes.delete("/pacientes/:id", pacientesValidators.deletar, pacientesController.deletar);


routes.get("/psicologos", psicologoController.listar);
routes.get("/psicologos/:id", psicologosValidators.listarID, psicologoController.listarID);
routes.post("/psicologos", psicologosValidators.cadastrar,psicologoController.cadastrar);
routes.put("/psicologos/:id",psicologosValidators.atualizar, psicologoController.atualizar);
routes.delete("/psicologos/:id", psicologosValidators.deletar, psicologoController.deletar);


routes.post("/login", authValidator, psicologoController.login);


routes.get("/dashboard/numero-atendimentos", dashboardController.numAtendimentos);
routes.get("/dashboard/numero-pacientes", dashboardController.numPacientes);
routes.get("/dashboard/numero-psicologos", dashboardController.numPsicologos);
routes.get("/dashboard/media-atendimentos", dashboardController.mediaAtendimentos);


const authValidator = require("../validators/auth/login");
const pacientesValidators = require("../validators/pacientes");
const psicologosValidators = require("../validators/psicologos");
const atendimentosValidators = require("../validators/atendimentos");

const pacientesController = require("../controllers/pacientes");
const psicologoController = require("../controllers/psicologos")
const atendimentosController = require("../controllers/atendimentos");
const dashboardController = require("../controllers/dashboard");


module.exports = routes;
