import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";
import apiRoute from "./routes/routes";

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/routes", apiRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
