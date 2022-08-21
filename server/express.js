import express from 'express'
import cors from 'cors'
import postTemp  from './controller.js'
import postCurrent  from './currentControl.js'

const app = express()




app.use(cors())
app.use(express.json())

app.post('/tempSetter', postTemp)
app.post('/current', postCurrent)



const port = 4000
app.listen(port, () => {
  console.log(`The owl demon is reporting for Hooty at port ${port}. HOOT!!`)
})


