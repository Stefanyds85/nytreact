module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const articleController = require("../controllers/articleController");

	//add any API routes here

	// Matches with "/api/article"
	router.route("/")
	.get(articleController.findAll)
	.post(articleController.create);

	// Matches with "/api/books/:id"
	router
	.route("/:id")
	.get(articleController.findById)
	.put(articleController.update)
	.delete(articleController.remove);

	module.exports = router;



		return router;
	};