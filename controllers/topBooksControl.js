const db = require("../models/TopBook");

module.exports = {
  findAll: function (req, res) {
    db.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  findById: function (req, res) {
    db.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  create: function (req, res) {
    db.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  update: function (req, res) {
    const _id = req.body._id;
    const update = {
      books: req.body.books,
      dateAdded: req.body.lastUpdated
    }
    db.findOneAndUpdate({ _id }, update)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  remove: function (req, res) {
    db.findById({ _id: req.params.id })
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  }
};
