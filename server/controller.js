import { Low, JSONFile } from 'lowdb'
import bodyParser from 'body-parser'
import e from 'cors'

const equipDB = new Low(new JSONFile('equip.json'))
await equipDB.read()


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
        const { equipment } = equipDB.data
        equipment.push(temp)
        
        res.status(200).json()
}

export default postTemp;
