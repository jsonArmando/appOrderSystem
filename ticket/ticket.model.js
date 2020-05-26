var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tickectSchema = new Schema({
    nameCustomer: { type: String, required: true, max: 100 },
    idnCustomer: { type: Number, required: true },
    nameTechnical: { type: String, required: true, max: 100 },
    idnTechnical: { type: Number, required: true },
},
    {
        timestamps: true
    })
module.exports = tickectSchema;