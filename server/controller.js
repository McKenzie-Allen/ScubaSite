import { Low, JSONFile } from 'lowdb'
import bodyParser from 'body-parser'

const siteDB = new Low(new JSONFile('sites.json'))
await siteDB.read()


// const siteDB = new Low(new JSONFile('sites.json'))
// await siteDB.read()
// await siteDB.write()


// const equipmentDb = (new FileSync('equipmentdb.json'))
// const siteDb = (new FileSync('sitedb.json'))

// equipDB.data ||= { equipment: [] }

// siteDB.data ||= { site: [] }
// siteDb.defaults({ sites: [] }).write()

const postTemp = (req,res) => {
        const { temp } = req.body
        console.log(temp)
        const data = siteDB.data.sites
        const matchingSites = data.filter(sites => sites.avarageTemp >= temp)
        console.log(matchingSites)
        res.status(200).json(matchingSites)
}

export default postTemp;
