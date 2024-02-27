import Pharmacy from "../models/pharmacy.js";

// get all drugs
export const getAllDrugs = async (req, res) => {
  try {
    let drugs = await Pharmacy.find();
    return res.status(200).json(drugs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get unit of pricing
export const getUnitOfPricing = async (req, res) => {
  try {
    // Use the aggregate pipeline to group and count
    const unitOfPricingCounts = await Pharmacy.aggregate([
      {
        $group: {
          _id: "$unit_of_pricing",
          count: { $sum: 1 },
        },
      },
    ]);

    // Check if there are any results
    if (!unitOfPricingCounts || unitOfPricingCounts.length === 0) {
      return res.status(404).json({ message: "Unit of pricing not found" });
    }

    // Transform the results into key-value pairs
    const unitOfPricingMap = unitOfPricingCounts.reduce(
      (acc, { _id, count }) => {
        acc[_id] = count;
        return acc;
      },
      {}
    );

    // Return the key-value pairs
    return res.status(200).json(unitOfPricingMap);

    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// add an item
export const createDrug = async (req, res) => {
  try {
    let drug = await Pharmacy.create(req.body);
    return res.status(201).json(drug);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get a single item by id
export const getDrugById = async (req, res) => {
  try {
    let drug = await Pharmacy.findById(req.params.id);
    if (!drug) {
      return res.status(404).json({ message: "Drug not found" });
    }
    return res.status(200).json(drug);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update an item by id
export const updateDrugById = async (req, res) => {
  try {
    let drug = await Pharmacy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!drug) {
      return res.status(404).json({ message: "Drug does not exist" });
    }
    return res.status(200).json(drug);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete an item by id
export const deleteDrugById = async (req, res) => {
  try {
    let drug = await Pharmacy.findByIdAndDelete(req.params.id);
    if (!drug) {
      return res.status(404).json({ message: "Drug does not exist" });
    }
    return res.status(200).json({ message: "Drug deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// search for a drug
export const searchDrugs = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({ message: "Search is required" });
    }

    // Use $regex directly in the Mongoose query for case-insensitive search
    const drugs = await Pharmacy.find({
      $or: [
        { drug_name: { $regex: search, $options: "i" } },
        { drug_code: { $regex: search, $options: "i" } },
      ],
    });

    return res.status(200).json(drugs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
