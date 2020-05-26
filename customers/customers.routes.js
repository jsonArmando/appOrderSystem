var Customers = require('./customers.controller');

module.exports = (router) => {
    router.post('/add', Customers.createCustomer);
    router.get('/customers', Customers.getCustomers);
    router.get('/customers/:idn', Customers.getCustomer);
    router.put('/update/:id',Customers.updateCustomer);
    router.delete('/remove/:id',Customers.deleteCustomer);
}