var express = require('express')
var app = express()
const cors = require('cors')

app.use(cors());

app.get('/tempSetter', function (req, res) {
  res.status(200).send('Connection made')
})
const port = 4000
app.listen(port, () => {
  console.log(`the owl is in the nest at port ${port}`)
})
