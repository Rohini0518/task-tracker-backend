const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 5 },
  description: { type: String },
  status: { type: String, enum: ["Pending", "Completed"] ,    default: 'Pending'
},
  createdAt: { type: Date, default: Date.now },
  dueDate: { type: Date },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
