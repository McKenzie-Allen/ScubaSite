import { Low, JSONFile } from 'lowdb'
import bodyParser from 'body-parser'

const siteDB = new Low(new JSONFile('sites.json'))
await siteDB.read()


const postTemp = (req,res) => {
        const { temp } = req.body
        console.log(temp)
        const data = siteDB.data.sites
        const matchingSites = data.filter(sites => sites.avarageTemp >= temp)
        console.log(matchingSites)
        if(matchingSites.length === 0) {
                res.status(200).send('There are no sites that match your temp. Please lower it and try again.')
        } else {
                res.status(200).json(matchingSites)
        }
        
}



export default postTemp
