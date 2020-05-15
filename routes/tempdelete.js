const axios = require("axios")

const tempid = "5ebee6722854db241c501399"

axios.delete("http://localhost:3001/api/books/" + tempid)
  .then(console.log("it works!"))
  .catch((e) => {
    console.log("Oh no!")
  })
