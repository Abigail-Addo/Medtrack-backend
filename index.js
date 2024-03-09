import express from "express";
const app = express();
import morgan from "morgan";

import router from "./src/router/routes.js";
// import labRoutes from "./src/router/routes.lab.js";
import dotenv from "dotenv";
dotenv.config();

import dbConnect from "./config/db.js";

const PORT = process.env.PORT;

import cors from "cors";
app.use(
  cors()
);

import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(morgan("dev"));

// api
app.use("/medtrack", router);

dbConnect();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
