var Technicals = require('./technical.dao');

exports.createTechnicals = (req, res, next) => {
    const technical = {
        name: req.body.name,
        idn: req.body.idn,
        phone: req.body.phone
    };
    Technicals.create(technical, (err, technical) => {
        if (err) res.json({ error: err });
        res.json({ message: 'Technical created successfully' });
    });
}

exports.getTechnicals = (req, res, next) => {
    Technicals.get({}, (err, technicals) => {
        if (err) res.json({ error: err });
        res.json({ Technicals: technicals })
    });
}

exports.getTechnical = (req, res, next) => {
    Technicals.get({ _id: req.params.id }, (err, technical) => {
        if (err) res.json({ error: err });
        res.json({ Technicals: technical})
    });
}
