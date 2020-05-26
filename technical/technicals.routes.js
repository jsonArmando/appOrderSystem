var Technicals = require('./technical.controller');

module.exports = (router) => {
    router.post('/technicals/add', Technicals.createTechnicals);
    router.get('/technicals', Technicals.getTechnicals);
    router.get('/technical/:id', Technicals.getTechnical);
}