const express = require('express')
const router = express.Router()
const User = require('../Model/user-model'); 

const sequelize = require('../util/database');


router.delete('/delete-user/:id', async (req, res, next) => {
    const uid = req.params.id
    await User.destroy({where: {id: uid}})
    res.sendStatus(200)
})

module.exports = router