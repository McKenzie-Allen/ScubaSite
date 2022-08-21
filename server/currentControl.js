import { Low, JSONFile } from 'lowdb'
import bodyParser from 'body-parser'

const siteDB = new Low(new JSONFile('sites.json'))
await siteDB.read()



const postCurrent = (req,res) => {
    const { current } = req.body
    console.log (current)
    const data = siteDB.data.sites
    const matchingSites = data.filter(sites => sites.current === current)
    console.log(siteDB.data.sites)
    if (matchingSites.length === 0){
            res.status(200).send("That is not a valid Current Please enter in another")
    } else {
            res.status(200).json(matchingSites)
    }
    
}

export default postCurrent;