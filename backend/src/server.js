import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

const PORT = process.env.PORT || 5001;

dotenv.config();
const app = express();
app.use(cors());

// middleware
app.use(express.json());
app.use(rateLimiter);
// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} and Req URL is ${req.url}`);
//   next();
// });
app.use("/api/notes", notesRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
  });
});
