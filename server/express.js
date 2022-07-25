var express = require('express')
var app = express()
const cors = require('cors')

app.use(cors());

app.post('/tempSetter', function (req, res) {
  console.log(req)
  res.status(200).send('Connection made')
})
const port = 4000
app.listen(port, () => {
  console.log(`The owl demon is reporting for Hooty at port ${port}. HOOT!!`)
})
