var mongoose = require('mongoose');
var tickectSchema = require('./ticket.model');


tickectSchema.statics = {
    create: function (data, cb) {
        var technical = new this(data);
        technical.save(cb);
    },
    get: function (query, cb) {
        this.find(query, cb);
    },
    getByIdn: function (query, cb) {
        this.find(query, cb);
    },
}
const tickectModel = mongoose.model('Tickets', tickectSchema);
module.exports = tickectModel;