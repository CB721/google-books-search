const router = require("express").Router();
const controller = require("../../controllers/topBooksControl");

router.route("/")
    .get(controller.findAll)
    .post(controller.create)
    .put(controller.update);

router.route("/:id")
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.remove)

module.exports = router;