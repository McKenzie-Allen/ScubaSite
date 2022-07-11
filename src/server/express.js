var express = require('express')
var app = express()
const cors = require('cors')

app.use(cors());

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(4000, () => {
  console.log("the app is running on port 4000")
})
