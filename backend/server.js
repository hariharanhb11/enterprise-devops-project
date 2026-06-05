
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Enterprise DevOps Backend Running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "backend",
    environment: "development"
  });
});

app.get("/api/pipeline", (req, res) => {
  res.json({
    pipeline: "Enterprise CI/CD",
    status: "running"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});