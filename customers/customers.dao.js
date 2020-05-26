var mongoose = require('mongoose');
var customerSchema = require('./customers.model');

customerSchema.statics = {
    create: function (data, cb) {
        var customer = new this(data);
        customer.save(cb);
    },
    get: function (query, cb) {
        this.find(query, cb);
    },
    getByIdn: function (query, cb) {
        this.find(query, cb);
    },
    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
    },
    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }

}
const customersModel = mongoose.model('Customers', customerSchema);
module.exports = customersModel;