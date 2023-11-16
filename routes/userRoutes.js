const express = require("express");
const router = express.Router()


const {
    getUser,
    createUser,
    initializeTrans
} = require("../controllers/userController");


router.get("/getUser/:id", getUser);
router.post("/createUser", createUser);
router.post("/initiatetransaction/:id", initializeTrans)

module.exports =  router
