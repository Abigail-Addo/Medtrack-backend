import Lab from "../models/lab.js";


// get all labs based on lab type
export const getAllLabsByType = async (req, res) => {
  try {
    const { lab_type } = req.body;

    if (!lab_type) {
      return res.status(400).json({ message: 'Lab type parameter is required' });
    }

    const labs = await Lab.find({ lab_type: lab_type }).sort({ lab_item: 1 });

    return res.status(200).json(labs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get all lab items
export const getAllLabs = async (req, res) => {
  try {
    const labs = await Lab.find().sort({ lab_item: 1 });
    return res.status(200).json(labs);
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
    const existingLab = await Lab.findOne({
      code: req.body.code,
    });

    if (existingLab) {
      return res.status(400).json({ message: "Lab item already exists" });
    }
    let lab = await Lab.create(req.body);
    return res.status(201).json(lab);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get a single item by id
export const getLabById = async (req, res) => {
  try {
    let lab = await Lab.findById(req.params.id);
    if (!lab) {
      return res.status(404).json({ message: "Lab item not found" });
    }
    return res.status(200).json(lab);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update an item by id
export const updateLabById = async (req, res) => {
  try {

    const existingLab = await Lab.findOne({
      code: req.body.code,
    });

    if (existingLab) {
      return res.status(400).json({ message: "Lab item already exists" });
    }

    let lab = await Lab.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!lab) {
      return res.status(404).json({ message: "Lab item does not exist" });
    }
    return res.status(200).json(lab);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete an item by id
export const deleteLabById = async (req, res) => {
  try {
    let lab = await Lab.findByIdAndDelete(req.params.id);
    if (!lab) {
      return res.status(404).json({ message: "Lab item does not exist" });
    }
    return res.status(200).json({ message: "Lab item deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// search for a lab
export const searchLabs = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({ message: "Search is required" });
    }

    // Use $regex directly in the Mongoose query for case-insensitive search
    const labs = await Lab.find({
      $or: [
        { lab_item: { $regex: search, $options: "i" } }
      ],
    });

    return res.status(200).json(labs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


