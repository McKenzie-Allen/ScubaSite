import { Low, JSONFile } from 'lowdb'
import bodyParser from 'body-parser'

const siteDB = new Low(new JSONFile('sites.json'))
await siteDB.read()



const postSurface = (req,res) => {
    const { surface } = req.body
    const data = siteDB.data.sites
    const matchingSites = data.filter(sites => sites.surfaceCondition === surface)
    console.log(siteDB.data.sites)
    if (matchingSites.length === 0){
            res.status(200).send("That is not a valid Surface Condition Please enter in another")
    } else {
            res.status(200).json(matchingSites)
    }
    
}

export default postSurface;