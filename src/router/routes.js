import express from "express";
import {
  getAllDrugs,
  createDrug,
  getDrugById,
  updateDrugById,
  deleteDrugById,
  getUnitOfPricing,
  searchDrugs,
} from "../controllers/pharmacy.js";
import {
  getAllLabs,
  createLab,
  getLabById,
  updateLabById,
  deleteLabById,
  getLabType,
  getAllLabsByType,
  searchLabs,
} from "../controllers/lab.js";

const router = express.Router();


// pharmacy
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
router.get("/v1/search-drugs", searchDrugs);


// lab
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

// get unit of pricing
router.get("/v1/labType", getLabType);

// get all labs based on lab type
router.post("/v1/getlabType", getAllLabsByType);

// search
router.get("/v1/search-labs", searchLabs);

export default router;
