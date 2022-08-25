import express from 'express'
import cors from 'cors'
import postTemp  from './tempControl.js'
import postCurrent  from './currentControl.js'
import postSurface from './surfaceControl.js'
import postFin from './finControl.js'
import postReg from './regControl.js'

const app = express()




app.use(cors())
app.use(express.json())

app.post('/tempSetter', postTemp)
app.post('/current', postCurrent)
app.post('/surface', postSurface)
app.post('/fin', postFin)
app.post('/reg', postReg)
// app.post('/suit', postSuit)



const port = 4000
app.listen(port, () => {
  console.log(`The owl demon is reporting for Hooty at port ${port}. HOOT!!`)
})


