const db = require("../models/Book");
const axios = require("axios");

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
    db.findOneAndUpdate({ id: req.params.id }, req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  remove: function (req, res) {
    db.findById({ _id: req.params.id })
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  searchAll: function (req, res) {
    const book = req.params.book;
    const URL = "https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=";
    axios.get(URL + book)
      .then(response => {
        return res.status(200).json(response.data);
      })
      .catch(err => {
        return res.status(500).send(err);
      });
  },
  searchOne: function (req, res) {
    const book = req.params.book;
    const URL = "https://www.googleapis.com/books/v1/volumes?maxResults=1&orderBy=relevance&q=";
    axios.get(URL + book)
      .then(response => {
        return res.status(200).json(response.data);
      })
      .catch(err => {
        return res.status(500).send(err);
      });
  },
  getTopBooks: function (req, res) {
    const nyURL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?num_results=5&api-key=";
    const nyKey = process.env.NY_TIMES;
    // const outArr = [];
    axios.get(nyURL + nyKey)
      .then(response => {
        nyToGoogle(response.data.results.books, [], 0);
      })
      .catch(err => {
        return res.status(500).send(`error getting ny times books: ${err}`);
      });
    function nyToGoogle(bookList, outArr, position) {
      if (position === 10) {
        return res.status(200).json(outArr);
      } else {
        const URL = "https://www.googleapis.com/books/v1/volumes?maxResults=1&orderBy=relevance&q=";
        axios.get(URL + bookList[position].title)
          .then(res => {
            let arr = [...outArr];
            arr.push(res.data.items[0]);
            const nextPos = position + 1;
            nyToGoogle(bookList, arr, nextPos);
          })
          .catch(err => {
            return res.status(500).send(`error converting ny times books to google books ${err}`);
          });
      }
    }
  }
};
