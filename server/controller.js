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
        res.status(200).json(matchingSites)
}



export default postTemp
