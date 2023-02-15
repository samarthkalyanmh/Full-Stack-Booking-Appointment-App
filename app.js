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

const addUserRoute = require('./Routes/add-user-route')
const deleteUserRoute = require('./Routes/delete-user')
const getAllUsersRoute = require('./Routes/get-all-users')

app.get(getAllUsersRoute)

// app.get('/get-all-users', async (req, res, next) => {
//     // const allUsers = await User.findAll()
//     // res.json(allUsers)
//     console.log('hitting here')
// })

app.post(addUserRoute)
app.delete(deleteUserRoute)

app.listen(4)