import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5001;

dotenv.config();
const app = express();
app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at PORT:${PORT}`);
});
