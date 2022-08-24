import { Low, JSONFile } from 'lowdb'
import bodyParser from 'body-parser'

const equipDB = new Low(new JSONFile('./database/equip.json'))
await equipDB.read()


const postFin = (req,res) => {
        const { fin } = req.body
        console.log(fin)
        const data = equipDB.data.equipment
        console.log(data)
       res.status(200).send('Connection made')
        
}



export default postFin
