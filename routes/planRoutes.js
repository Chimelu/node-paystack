const express = require("express");
const router = express.Router()



const {
    createPlan,
    getPlans,
    addWebhook
} = require("../controllers/planController");

router.get("/getPlans",getPlans)
router.get("/createPlan",createPlan)
router.post("/paystackWebhook", addWebhook);

module.exports = router
