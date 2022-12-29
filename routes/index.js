const { Router } = require("express");
const { authRouter } = require("./auth.routes");
const { calendarRouter } = require("./calendar.routes");

const router = Router();

router.use("/auth", authRouter);
router.use("/general", calendarRouter);

module.exports = router;
