const express = require("express");
const { passwordGenerator } = require("../controllers/passwordController");

const router = express.Router();

router.route("/:minLength/:number/:symbol/:total").post(passwordGenerator);

module.exports = router;
