const express = require("express");
const cors = require("cors");
const app = express();
// const { getPhraseWords, setPhrase, sendPhrase, deletePhrase } = require('./controller.js')

app.use(cors());
app.use(express.json())

let tempArr = []

app.post('/test', (req, res) => {
  const { temp } = req.body
  console.log(temp)
  console.log(req.temp)
  const data = "connection"
  res.status(200).send(data)
})

// app.get("/phrase", getPhraseWords)
// app.post("/phrase", setPhrase)
// app.get("/all", sendPhrase)
// app.delete("/phrase/:index", deletePhrase)

const port = 5000

app.listen(port, () => {
    console.log(`The owl demon is reporting for Hooty at port ${port}. HOOT!!`)
})