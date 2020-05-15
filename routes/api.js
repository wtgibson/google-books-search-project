const router = require("express").Router();
const Book = require("../models/Books.js");

// tested, working with seeded value and posted value
router.get("/api/books", (req, res) => {
  Book.find({})
    .sort({ date: -1 })
    .then(dbbook => {
      res.json(dbbook);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//add one book (yes, I know)
//tested with tempinput.html
router.post("/api/books", ({ body }, res) => {
  console.log(body)
  Book.create(body)
    .then(dbbook => {
      res.json(dbbook);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// testing
router.delete("/api/books/:id", (req, res) => {
  Book.deleteOne({
    "_id": req.params.id
  })
    .catch(err => {
      res.status(400).json(err);
    });
});

// do not define route "*", that is in server.js

module.exports = router;
