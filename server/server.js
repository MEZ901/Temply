import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const PREFIX = process.env.PREFIX || "api";

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}/${PREFIX}`);
});
