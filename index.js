const express = require("express");
const mongoose = require("mongoose");
const taskRoutes=require('./routes/taskRoute')
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
require('dotenv').config();

app.use(express.json());
app.use(cors({ origin: "*" }));
// app.listen(port, "localhost", () => {
//   console.log(`running in ${port} port`);
// });
app.listen(port, "0.0.0.0", () => {
  console.log(`running on port ${port} (0.0.0.0)`);
});

app.get("/", (req, res) => res.send("Backendserver started"));

app.use("/api", taskRoutes);

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ Connection error:", err));