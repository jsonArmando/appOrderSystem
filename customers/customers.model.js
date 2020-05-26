var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    category: { type: String, enum: ['TV', 'TV LCD', 'TV Plasma', 'TV Oled', 'TV Led', 'Otros'] },
    description: { type: String, required: false, max: 300 },
    idn: { type: Number, required: true },
    email: { type: String, required: true },
    city: { type: String, required: false },
    phone: { type: Number, required: true },
    tickect: { type: Number, required: false}
},
    {
        timestamps: true
    });
module.exports = customerSchema;