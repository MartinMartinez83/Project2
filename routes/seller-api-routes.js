var db = require("../models");

module.exports = function(app) {
  app.get("/api/sellers", function(req, res) {
    db.Seller.findAll({
      include: [db.Items],
    }).then(function(dbSeller) {
      res.json(dbSeller);
    });
  });

  app.get("/api/sellers/:id", function(req, res) {
    db.Seller.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Items],
    }).then(function(dbSeller) {
      res.json(dbSeller);
    });
  });

  app.post("/api/sellers", function(req, res) {
    db.Seller.create(req.body).then(function(dbSeller) {
      res.json(dbSeller);
    });
  });

  app.delete("/api/sellers/:id", function(req, res) {
    db.Seller.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbSeller) {
      res.json(dbSeller);
    });
  });
};
