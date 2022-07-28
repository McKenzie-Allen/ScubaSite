var express = require('express')
var app = express()
const cors = require('cors')
const { postTemp } = require('./controller.js')

app.use(cors())
app.use(express.json())

app.post('/tempSetter', postTemp)



const port = 4000
app.listen(port, () => {
  console.log(`The owl demon is reporting for Hooty at port ${port}. HOOT!!`)
})


