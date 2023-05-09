const {createLogin, getLoginByID, getLogin, updateLoginByID, deleteLoginByID  } = require("./login.controller");

const router = require("express").Router();

router.post("/add", createLogin)
    .get("/:id", getLoginByID)
    .get("/", getLogin)
    .post("/:id/update", updateLoginByID)
    .delete("/:id/delete", deleteLoginByID);
module.exports =  router;