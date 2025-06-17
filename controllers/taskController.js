const Task = require("../models/taskModel");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    if (!tasks) return res.status(400).send("no tasks found");

    res.status(200).send(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch tasks", error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    const newTask = new Task({
      title,
      description,
      status,
      dueDate,
      createdAt: new Date(),
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating task", error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(updated);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating task", error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Task.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    res
      .status(200)
      .json({ message: "Task deleted successfully", data: deleted });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
};

module.exports = { createTask, getAllTasks, updateTask, deleteTask };
