const router = require("express").Router();
const loginRouter=require("../Login/login.router");


// const { verifyToken } = require("../Login/login.controller");



router.use("/api/login",loginRouter);

module.exports = router;