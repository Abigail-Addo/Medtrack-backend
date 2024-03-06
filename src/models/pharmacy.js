import mongoose from "mongoose";

// defining a schema - structure of the table
const PharmacySchema = mongoose.Schema(
  {
    drug_name: {
      type: String,
      required: [true, "Drug Name cannot be empty"],
    },
    description: {
      type: String,
      required: [true, "Description cannot be empty"],
    },
    drug_code: {
      type: String,
      required: [true, "Drug Code cannot be empty"],
      unique: true,
    },
    unit_of_pricing: {
      type: String,
      required: [true, "Unit of Pricing cannot be empty"],
    },
    price: {
      type: Number,
      required: [true, "Price cannot be empty"],
    },
  },
  { timestamps: true }
);


// model - interacting with our schema
const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);

export default Pharmacy;
