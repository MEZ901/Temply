import express from "express";

// Routes
import helloWorldRoutes from "./routes/helloworld.routes.js";

const app = express();

app.use(express.json());

// Hello World route
app.use("/api/helloworld", helloWorldRoutes);

export default app;
