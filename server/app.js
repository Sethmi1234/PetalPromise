require("dotenv").config(); // ✅ Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/petalpromise";
if (!process.env.MONGO_URL) {
  console.warn("MongoDB URL not set in .env. Falling back to local URI:", mongoUrl);
}

mongoose.connect(mongoUrl) // removed deprecated options
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error ❌:", err.message);
  });

// ✅ Routes
app.use("/bouquet", require("./routes/bouquetRoutes"));

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API is running 💖");
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});