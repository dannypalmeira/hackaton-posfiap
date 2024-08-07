import {Router} from "express";
import {verificaLogado} from "../controllers/middleware.js";
const router = Router();

router.get("/", (req, res) => {
  const locals = {
    title: "HACKA | GRUPO O",
    description: "Pagina inicial do Hackaton",
  };
  res.render("home", locals);
});

router.get("/redefineSenha", (req, res) => {
  const locals = {
    title: "HACKA | GRUPO O",
    description: "Pagina de redefinição de senha",
  };
  res.render("redefineSenha", locals);
});

router.get("/login", (req, res) => {
  const locals = {
    title: "HACKA | GRUPO O",
    description: "Página de login",
  };
  res.render("login", locals);
});

router.get("/listaUsuario", (req, res) => {
  res.render("listaUsuario", {
    title: "HACKA | GRUPO O",
    description: "Página de perfil do usuário",
  });
});

// se tiver algum erro avisa apenas copiei a de cima e troquei o locals
router.get("/perfil", (req, res) => {
  res.render("perfil", {
    title: "HACKA | GRUPO O",
    description: "Página de perfil do usuário",
  });
});

router.get("/cadastro", (req, res) => {
  const locals = {
    title: "HACKA | GRUPO O",
    description: "Página de cadastro",
  };
  res.render("cadastro", {locals, erro: null});
});

router.get("/alteraSenha/:token?", (req, res) => {
  const locals = {
    title: "HACKA | GRUPO O",
    description: "Página de alteração de senha",
  };
  res.render("alteraSenha", {locals, erro: null});
});

router.get("/ongs", (req, res) => {
  const locals = {
    title: "HACKA | GRUPO O",
    description: "Página ONGs",
  };
  res.render("ongs", {
    locals,
    user: req.session.user,
    isAdmin: req.session.user && req.session.user.tipo === "Adm",
    ongs: ongs,
  });
});
/* 
router.post("/logout", verificaLogado, (req, res) => {
  req.session.destroy(error => {
    if (error) {
      console.log(error);
      return res.send('Erro ao fazer logout');
    }
    res.redirect('/');
  });
}); */

export default router;

