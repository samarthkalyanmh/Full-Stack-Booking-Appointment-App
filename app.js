const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('sequelize');


var cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.json({extended:false}))

app.post('/add-user', (req, res, next) => {
    // console.log('hi')
    console.log(req.body)


})

app.listen(4)