const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./bookRouting");
const topRoutes = require("./topBookRouting");

// Book routes
router.use("/books", bookRoutes);
router.use("/tops", topRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
