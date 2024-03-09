import express from "express";
const app = express();
import morgan from "morgan";

import routes from "./src/router/routes.js";
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
app.use("/medtrack", routes);

dbConnect();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
