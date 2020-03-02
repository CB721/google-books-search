const router = require("express").Router();
const controller = require("../../controllers/booksControl");

router
    .route("/")
    .get(controller.findAll)
    .post(controller.create);

router
    .route("/:id")
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.remove);

router
    .route("/search/all/:book")
    .get(controller.searchAll);

router
    .route("/search/single/:book")
    .get(controller.searchOne);

router
    .route("/ny/top")
    .get(controller.getTopBooks);

module.exports = router;