import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

import path from "path";

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

dotenv.config();
const app = express();
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

// middleware
app.use(express.json());
app.use(rateLimiter);
// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} and Req URL is ${req.url}`);
//   next();
// });
app.use("/api/notes", notesRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
  });
});
