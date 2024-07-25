import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const routes = express.Router();

routes.get("/usuarios", usuarioController.listaUsuarios);
routes.get("/usuarios/:id", usuarioController.listaUsuarioPorId);
routes.post("/login", usuarioController.login);
routes.post("/usuarios", usuarioController.cadastrarUsuario);
routes.post("/redefineSenha", usuarioController.redefineSenha);
routes.post("/alteraSenha", usuarioController.alteraSenha);

routes.put("/usuarios/:id", usuarioController.atualizaUsuario);
routes.delete("/usuarios/:id", usuarioController.excluiUsuario);

// usar o nome da funcao criada e exportar
export default routes;
