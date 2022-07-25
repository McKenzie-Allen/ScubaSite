

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'



const app = express()
app.use(cors())
app.use(bodyParser.json)

const port = 5000

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      );
      next()
  })


app.get('/test', (req, res) => {
    console.log(req)
    const data = "connction"
    res.status(200).send(data)
})


app.listen(port, () => {
    console.log(`The owl is reporting for Hooty at port ${port}. HOOT!!`)
})