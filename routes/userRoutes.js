const express = require("express");
const router = express.Router()


const {
    getUser,
    createUser,
    initializeTrans,
    verifyTrans
} = require("../controllers/userController");


router.get("/getUser/:id", getUser);
router.post("/createUser", createUser);
router.post("/initiatetransaction/:id", initializeTrans)
router.post("/verifytransaction/:id", verifyTrans);

module.exports =  router
