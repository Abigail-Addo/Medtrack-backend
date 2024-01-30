import Pharmacy from '../models/pharmacy.js';


// get all drugs
export const getAllDrugs = async (req, res) => {
    try {
        let drugs = await Pharmacy.find();
        return res.status(200).json(drugs);
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
            return res.status(404).json({ message: 'Drug not found' });
        }
        return res.status(200).json(drug);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// update an item by id
export const updateDrugById = async (req, res) => {
    try {
        let drug = await Pharmacy.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!drug) {
            return res.status(404).json({ message: 'Drug does not exist' });
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
            return res.status(404).json({ message: 'Drug does not exist' });
        }
        return res.status(200).json({ message: 'Drug deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};