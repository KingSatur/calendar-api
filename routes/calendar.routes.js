const { Router } = require("express");

const calendarRouter = Router();

calendarRouter.get("/");
calendarRouter.get("/:id");
calendarRouter.post("/");
calendarRouter.put("/:id");

module.exports = {
  calendarRouter,
};
