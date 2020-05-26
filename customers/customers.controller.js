var Customers = require('./customers.dao');

exports.createCustomer = (req, res, next) => {
    const customer = {
        name: req.body.name,
        idn: req.body.idn,
        email: req.body.email,
        phone: req.body.phone
    };
    Customers.create(customer, (err, customer) => {
        if (err) res.json({ error: err });
        res.json({ message: 'Customer created successfully' });
    });
}
exports.getCustomers = (req, res, next) => {
    Customers.get({}, (err, customers) => {
        if (err) res.json({ error: err });
        res.json({ Customers: customers })
    });
}

exports.getCustomer = (req, res, next) => {
    Customers.get({ idn: req.params.idn }, (err, customer) => {
        if (err) res.json({ error: err });
        res.json({ Customer: customer })
        console.log(req.body);
    });
}

exports.updateCustomer = (req, res, next) => {
    const customer = {
        name: req.body.name,
        idn: req.body.idn,
        email: req.body.email,
        phone: req.body.phone
    };
    Customers.update({_id:req.params.id}, customer,(err, customers) => {
        if (err) res.json({ error: err });
        res.json({ message: 'Customer updated successfully'})
        console.log(req.body);
    });
}

exports.deleteCustomer = (req, res, next) => {
    Customers.delete({ _id: req.params.id }, (err, customer) => {
        if (err) res.json({ error: err });
        res.json({ message: 'Customer deleted successfully' })
    });
}
