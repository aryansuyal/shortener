const express = require("express");
const {handlegenNewshortURL} = require("../controllers/url")
const router = express.Router();

router.post("/", handlegenNewshortURL);

module.exports = router;