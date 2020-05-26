var Tickets = require('./ticket.dao');
var Technicals = require('../technical/technical.dao');
var Customers = require('../customers/customers.dao');

exports.createTickects = (req, res, next) => {
    const tickect = {
        nameCustomer: req.body.nameCustomer,
        idnCustomer: req.body.idnCustomer,
        nameTechnical: req.body.nameTechnical,
        idnTechnical: req.body.idnTechnical
    };
    Tickets.create(tickect, (err, tickect) => {
        if (err) res.json({ error: err });
        res.json({ message: 'Tickect created successfull' });
    });
}

exports.getTickects = (req, res, next) => {
    Tickets.get({}, (err, tickets) => {
        if (err) res.json({ error: err });
        res.json({ Tickets: tickets })
    });
}

exports.getTickect = (req, res, next) => {
    Tickets.get({ _id: req.params.id }, (err, ticket) => {
        if (err) res.json({ error: err });
        res.json({ Tickets: ticket});
    });
}