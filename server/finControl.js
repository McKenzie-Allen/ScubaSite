import { Low, JSONFile } from 'lowdb'
import bodyParser from 'body-parser'

const equipDB = new Low(new JSONFile('equip.json'))
await equipDB.read()

const siteDB = new Low(new JSONFile('sites.json'))
await siteDB.read()


const postFin = (req,res) => {
        const { fin } = req.body
        console.log(fin)
        const data = equipDB.data.equipment.fins
        const matchingFins = data.filter(equipment => equipment.fins === fin)
        console.log(matchingFins)
        if(matchingFins.length === 0) {
                res.status(200).send('There are no fins that match. Please change it and try again.')
        } else {
                res.status(200).json(matchingFins)
        }
        
}



export default postFin
