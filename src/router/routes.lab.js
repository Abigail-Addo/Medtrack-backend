import express from "express";
import { getAllLabs, createLab, getLabById, updateLabById, deleteLabById } from "../controllers/lab.js";

const router = express.Router();

// import Pharmacy from "../controllers/pharmacy.js";

//get all items
router.get("/v1/labs", getAllLabs);

// get a single item by id
router.get("/v1/lab/:id", getLabById);

// add an item
router.post("/v1/lab", createLab);

// update an item by id
router.patch("/v1/lab/:id", updateLabById);

// delete an item by id
router.delete("/v1/lab/:id", deleteLabById);

export default router;
