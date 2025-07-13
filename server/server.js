import dotenv from "dotenv";
import app from "./src/app.js";
import db from "./src/models/index.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const PREFIX = process.env.PREFIX || "api";

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");

    // Sync models with the database
    db.sequelize.sync({ force: false }).then(() => {
      console.log("Database synced successfully.");
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
