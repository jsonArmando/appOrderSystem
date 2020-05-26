var mongoose = require('mongoose');
var technicalSchema = require('./technical.model');

technicalSchema.statics = {
    create: function (data, cb) {
        var technical = new this(data);
        technical.save(cb);
    },
    get: function (query, cb) {
        this.find(query, cb);
    },
    getByIdn: function (query, cb) {
        this.find(query, cb);
    }
}
const technicalModel = mongoose.model('Technicals', technicalSchema);
module.exports = technicalModel;