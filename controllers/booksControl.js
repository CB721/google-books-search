const db = require("../models/index");

module.exports = {
  findAll: function(req, res) {
    db.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  findById: function(req, res) {
    db.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.create(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.findOneAndUpdate({ id: req.params.id }, req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  remove: function(req, res) {
    db.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  }
};
