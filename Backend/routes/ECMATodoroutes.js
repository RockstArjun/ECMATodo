const express = require("express");
const {createECMATodo,findECMATodo,deleteECMATodo,updateECMATodo} = require("../controllers/ECMATodocontrollers")
const ECMATodoroute =express.Router();

ECMATodoroute.post("/createECMATodo",createECMATodo);
ECMATodoroute.get("/findECMATodo",findECMATodo);
ECMATodoroute.delete("/deleteECMATodo/:id",deleteECMATodo);
// ECMATodoroute.get("/updateECMATodo/:id",updateECMATodo);


module.exports = ECMATodoroute;
