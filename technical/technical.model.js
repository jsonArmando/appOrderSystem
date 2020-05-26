var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var technicalSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    idn: { type: Number, required: true },
    phone: { type: Number, required: true },
},
    {
        timestamps: true
    })
module.exports = technicalSchema;