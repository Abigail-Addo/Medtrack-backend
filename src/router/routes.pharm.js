import express from "express";
import { getAllDrugs,createDrug, getDrugById,updateDrugById, deleteDrugById, getUnitOfPricing, searchDrugs } from "../controllers/pharmacy.js";

const router = express.Router();

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

// get unit of pricing
router.get("/v1/unit-of-pricing", getUnitOfPricing);

// search
router.get("/v1/search-drugs/:search", searchDrugs);



export default router;
