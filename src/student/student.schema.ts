import mongoose from "mongoose";
export const DharunSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobilenumber: String,
    website: String,
    contactname: String,
    contactnumber: String,
    contactemail: String,
    notes: String,
    businesstype: String,
    category: String,
    comissionpercentage: String,
    activefrom: String,
    paymentOption: [String],
    criticalAccount: [],
})