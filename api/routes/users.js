var express = require('express');
var router = express.Router();
var userController = require("../controllers/user_controller.js");

/* GET users listing. */
router.route("/")
.get(userController.getUsers)
.post(userController.createUser)
.put(userController.updateUser)
.delete(userController.deleteUser)


module.exports = router;
