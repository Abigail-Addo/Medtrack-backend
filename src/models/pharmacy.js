import mongoose from 'mongoose';


// defining a schema - structure of the table
const PharmacySchema = mongoose.Schema({
    drug_name: {
        type: String,
        required: [true, 'Field cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Field cannot be empty']
    },
    drug_code: {
        type: String,
        required: [true, 'Field cannot be empty']
    },
    unit_of_pricing: {
        type: String,
        required: [true, 'Field cannot be empty']
    },
    price: {
        type: Number,
        required: [true, 'Field cannot be empty']
    },
},
    { timestamps: true }
)

// model - interacting with our schema
const Pharmacy = mongoose.model('Pharmacy',PharmacySchema)

export default Pharmacy