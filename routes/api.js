const router = require("express").Router();
const Book = require("../models/Books.js");

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
router.post("/api/books", ({ body }, res) => {
  Book.create(body)
    .then(dbbook => {
      res.json(dbbook);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete("/api/books:id", ({ body }, res) => {
  Book.find({
    "_id": req.params.id
  })
    .then(
      //here we call book.destroy()
      book.destroy()
    )
    .catch(err => {
      res.status(400).json(err);
    });
});

// do not define route "*", that is in server.js

module.exports = router;
