import { Low, JSONFile } from 'lowdb'
import bodyParser from 'body-parser'

const equipDB = new Low(new JSONFile('./database/equip.json'))
await equipDB.read()


const postSuit = (req,res) => {
        const { suit } = req.body
        console.log(suit)
        const suitLower = suit.toLowerCase()
        const data = equipDB.data.equipment
        const matchingItem = data.filter(item => item.itemName === suitLower)
        console.log(matchingItem)
        if(matchingItem.length === 0){
                res.status(200).send("you have selected an invalid entry, please try again")
        } else {
                res.status(200).json(matchingItem)
        }
        
}



export default postSuit
