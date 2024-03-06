import mongoose from 'mongoose';


// defining a schema - structure of the table
const LabSchema = mongoose.Schema({
    lab_item: {
        type: String,
        required: [true, 'Lab item cannot be empty']
    },
    lab_type: {
        type: String,
        enum: ['Radiology', 'Laboratory'],
        required: [true, 'Lab type cannot be empty']
    },
    category: {
        type: String,
        required: [true, 'Category cannot be empty']
    },
    sub_category: {
        type: String,
        required: [true, 'Sub category cannot be empty']
    },
    code: {
        type: String,
        required: [true, 'Code cannot be empty']
    },
    price: {
        type: Number,
        required: [true, 'Prise cannot be empty']
    },
},
    { timestamps: true }
)


// model - interacting with our schema
const Lab = mongoose.model('Lab',LabSchema)

export default Lab