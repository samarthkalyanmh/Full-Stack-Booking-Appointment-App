const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const cors = require('cors')

const app = express()  

app.use(cors())

app.use(bodyParser.json({extended:false}))

sequelize.sync()
.then()
.catch()

const addUserRoute = require('./Routes/addUser-route')
const deleteUserRoute = require('./Routes/deleteUser-route')
const getAllUsersRoute = require('./Routes/getAllUsers-route')

app.use(getAllUsersRoute)
app.use(addUserRoute)
app.use(deleteUserRoute)

app.listen(4)