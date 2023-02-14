const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const cors = require('cors')

// const { JSON } = require('sequelize');
// const { json } = require('body-parser');
// const { resolve4 } = require('dns');

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

    // console.log(req.body)
    
    try{
        const data = await User.create({
                                    name: name,
                                    email: email,
                                    number: number
                                })


                    // res.status(201).json({addedUserDetails: data})
                        res.json(data)
        
    } catch(err) {
        console.log('Error is ', err)
    }
    
})
app.get('/get-all-users', async (req, res, next) => {
    const allUsers = await User.findAll()
    res.json(allUsers)
})


app.delete('/delete-user/:id', async (req, res, next) => {
    const uid = req.params.id
    await User.destroy({where: {id: uid}})
    res.sendStatus(200)
})

app.listen(4)