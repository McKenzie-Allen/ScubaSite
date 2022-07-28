const { application } = require("express")



const postTemp = (req,res) => {
        const { temp } = req.body
        console.log(temp)
        res.status(200).send('Connection made')
}

module.exports = { postTemp }
