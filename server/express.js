import express from 'express'
import cors from 'cors'
var app = express()
app.use(cors());

// import { DiveCondition } from '../database/diveConditionHandlers'
// import { DiveEquipment } from '../database/diveEquipment'

// const diveConditions = new DiveCondition()
// const diveEquipment = new DiveEquipment()

// diveConditions.build().then(() => {
//   console.log('db initialized')
// })

// diveEquipment.build().then(() => {
//   console.log('db initialized')
// })

// app.use((req, res, next) => {
//   res.setHeader(
//     'Access-Control-Allow-Origin',
//     '*'
//   )
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET'
//   )
//   next()
// })

// app.get('/diveconditions', function (req, res) {
//   console.log("from api")
//   try {
//     const dc = diveConditions.readDiveCondition()
//     res.status(200).send(dc)
//   } catch (err) {
//     console.log(err)
//     res.status(400).send('failed to fetch the data')
//   }
  
// })
const port = 4000
app.listen(port, () => {
  console.log(`the owl is reporting for Hooty at port ${port}, HOOT!`)
})

// module.exports = app;
