var express = require('express');
var router = express.Router();
var projectsController = require("../controllers/project_controller.js");

/* GET users listing. */
router.route("/")
.get(projectsController.getProjects)
.post(projectsController.createProject)
.post(projectsController.addComment)
.post(projectsController.addVolunteer)


module.exports = router;
