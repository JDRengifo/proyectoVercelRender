const { Router } = require("express");
const { getactivitiesHandler, activitiesPostHandler } = require("../handlers/activitiesHandlers");

const activitiesRouter = Router();

activitiesRouter.get("/", getactivitiesHandler);

activitiesRouter.post("/", activitiesPostHandler);

module.exports = activitiesRouter;