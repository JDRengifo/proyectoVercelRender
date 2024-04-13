const { Router } = require("express");
const { countriesHandler, countriesDetailHandler } = require("../handlers/countriesHandlers");

const countriesRouter = Router();


countriesRouter.get("/", countriesHandler);

countriesRouter.get("/:id", countriesDetailHandler);

module.exports = countriesRouter;