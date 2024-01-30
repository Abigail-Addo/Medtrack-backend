import express from "express";
import { getAllDrugs,createDrug, getDrugById,updateDrugById, deleteDrugById } from "../controllers/pharmacy.js";

const router = express.Router();

// import Pharmacy from "../controllers/pharmacy.js";

//get all items
router.get("/v1/drugs", getAllDrugs);

// get a single item by id
router.get("/v1/drug/:id", getDrugById);

// add an item
router.post("/v1/drug", createDrug);

// update an item by id
router.patch("/v1/drug/:id", updateDrugById);

// delete an item by id
router.delete("/v1/drug/:id", deleteDrugById);

export default router;
