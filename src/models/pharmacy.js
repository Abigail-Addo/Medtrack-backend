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

PharmacySchema.pre('save', function (next) {
    // Convert drug_code to uppercase before saving
    this.drug_code = this.drug_code.toUpperCase();
    next();
});

// model - interacting with our schema
const Pharmacy = mongoose.model('Pharmacy',PharmacySchema)

export default Pharmacy