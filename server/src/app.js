import express from "express";

// Routes
import helloWorldRoutes from "./routes/helloworld.routes.js";
import testRoutes from "./routes/test.routes.js";

const app = express();

app.use(express.json());

// Hello World route
app.use("/helloworld", helloWorldRoutes);
// Test routes
app.use("/test", testRoutes);

// health check route
app.get("/", (req, res) => {
  res.send("🧾 Temply API is running...");
});

export default app;
