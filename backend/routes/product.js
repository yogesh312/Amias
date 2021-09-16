const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const productController = require("../controllers/productController");
//const { catchErrors } = require("../handlers/errorHandlers");

const auth = require("../middlewares/auth");

router.get("/", auth, catchErrors(productController.getAllProduct));
router.post("/", auth, catchErrors(productController.createProduct));
router.get("/:userScore", auth, catchErrors(productController.getProduct));
//router.get("/:userScore/:category", catchErrors(productController.getCategoryProduct));
router.get("/yo/:userScore", auth, catchErrors(productController.yo));

module.exports = router;
