import Lab from "../models/lab.js";

// get all drugs
export const getAllLabs = async (req, res) => {
  try {
    let drugs = await Lab.find();
    return res.status(200).json(drugs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get lab type
export const getLabType = async (req, res) => {
  try {
    // Use the aggregate pipeline to group and count
    const labTypeCounts = await Lab.aggregate([
      {
        $group: {
          _id: "$lab_type",
          count: { $sum: 1 },
        },
      },
    ]);

    // Check if there are any results
    if (!labTypeCounts || labTypeCounts.length === 0) {
      return res.status(404).json({ message: "Lab type not found" });
    }

    // Transform the results into key-value pairs
    const labTypeMap = labTypeCounts.reduce(
      (acc, { _id, count }) => {
        acc[_id] = count;
        return acc;
      },
      {}
    );

    // Return the key-value pairs
    return res.status(200).json(labTypeMap);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// add an item
export const createLab = async (req, res) => {
  try {
    let drug = await Lab.create(req.body);
    return res.status(201).json(drug);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get a single item by id
export const getLabById = async (req, res) => {
  try {
    let drug = await Lab.findById(req.params.id);
    if (!drug) {
      return res.status(404).json({ message: "Drug not found" });
    }
    return res.status(200).json(drug);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update an item by id
export const updateLabById = async (req, res) => {
  try {
    let drug = await Lab.findByIdAndUpdate(req.params.id, req.body, {
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
export const deleteLabById = async (req, res) => {
  try {
    let drug = await Lab.findByIdAndDelete(req.params.id);
    if (!drug) {
      return res.status(404).json({ message: "Drug does not exist" });
    }
    return res.status(200).json({ message: "Drug deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
