

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()
app.use(cors())
app.use(bodyParser.json)

const port = 4000


app.get('test', function(req, res) {
    const data = "connection"
    res.status(200).send(data)
})


app.listen(port, () => {
    console.log(`The owl is reporting for Hooty at port ${port}. HOOT!!`)
})