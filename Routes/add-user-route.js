const express = require('express')

const router = express.Router()

router.post('/add-user', async (req, res, next) => {
    // console.log(req.body)

    const name = req.body.name
    const email = req.body.email
    const number = req.body.number

    // console.log(req.body)
    
    try{
        const data = await User.create({
                                    name: name,
                                    email: email,
                                    number: number
                                })
                                .then()
                                .catch()

        console.log('returned data from database is ', data)
                    // res.status(201).json({addedUserDetails: data})
        res.json(data)
        
    } catch(err) {
        console.log('Error is ', err)
    }
    
})

exports = router