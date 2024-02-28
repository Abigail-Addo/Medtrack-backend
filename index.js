import express from "express";
const app = express();
import morgan from "morgan";

import pharmarcyRoutes from "./src/router/routes.pharm.js";
import labRoutes from "./src/router/routes.lab.js";
import dotenv from "dotenv";
dotenv.config();

import dbConnect from "./config/db.js";

const PORT = process.env.PORT;

import cors from "cors";
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);

// api
app.use("/pharm", pharmarcyRoutes);
app.use("/lab", labRoutes);

dbConnect();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
