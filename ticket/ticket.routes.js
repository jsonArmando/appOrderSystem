var Tickects = require('./ticket.controller');

module.exports=(router) =>{
    router.post('/tickets/add/:id',Tickects.createTickects);
    router.get('/tickets',Tickects.getTickects);
    router.get('/ticket/:id',Tickects.getTickect);
}