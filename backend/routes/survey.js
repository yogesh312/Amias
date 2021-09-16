const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const surveyController = require("../controllers/surveyController");

router.post("/", catchErrors(surveyController.createSurvey));



module.exports = router;
