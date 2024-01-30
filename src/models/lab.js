import mongoose from 'mongoose';


// defining a schema - structure of the table
const LabSchema = mongoose.Schema({
    lab_item: {
        type: String,
        required: [true, 'Field cannot be empty']
    },
    lab_type: {
        type: String,
        required: [true, 'Field cannot be empty']
    },
    category: {
        type: String,
        required: [true, 'Field cannot be empty']
    },
    sub_category: {
        type: String,
        required: [true, 'Field cannot be empty']
    },
    code: {
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
const Lab = mongoose.model('Lab',LabSchema)

export default Lab