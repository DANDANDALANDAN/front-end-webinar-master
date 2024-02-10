const express = require ("express");
const router = express.Router();

router.get("/user", (req, res, next) => {
    console.log("test");
});

module.exports = router;