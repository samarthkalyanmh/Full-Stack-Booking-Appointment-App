const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const cors = require('cors')

const app = express()
const User = require('./model/user-model');

app.use(cors())

app.use(bodyParser.json({extended:false}))

sequelize.sync()
.then()
.catch()

app.post('/add-user', async (req, res, next) => {
    // console.log(req.body)

    const name = req.body.name
    const email = req.body.email
    const number = req.body.number

    console.log(req.body)
    
    try{
        const data = await User.create({
                                    name: name,
                                    email: email,
                                    number: number
                                })
                                .then(res => {
                                    console.log('response from database', res)
                                })
                                .catch(err => {
                                    console.log(err)
                                })

        res.status(201).json({addedUserDetails: data})

    } catch(err) {
        console.log('Error is ', err)
    }
    
})

app.delete('/delete-user/:id', () => {
    
})

app.listen(4)