const express = require("express");
const {handlegenNewshortURL, handleGetAnalytics} = require("../controllers/url")
const router = express.Router();

router.post("/", handlegenNewshortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;