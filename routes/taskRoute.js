const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/getAllTasks", taskController.getAllTasks);
router.put("/updateTask/:id", taskController.updateTask);
router.post("/createTask", taskController.createTask);
router.delete("/deleteTask/:id", taskController.deleteTask);

module.exports = router;