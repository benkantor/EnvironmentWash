var express = require('express');
var router = express.Router();
var projectsController = require("../controllers/project_controller.js");

router.route("/")
.get(projectsController.getProjects)
.post(projectsController.createProject);

router.route("/:id")
.get(projectsController.getProjectById)

router.route("/:id/volunteer")
.post(projectsController.addVolunteer);

router.route("/:id/comment")
.post(projectsController.addComment);

module.exports = router;
