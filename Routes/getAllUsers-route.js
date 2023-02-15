const express = require('express')
const User = require('../Model/user-model');  

const router = express.Router()

router.get('/get-all-users', async (req, res, next) => {
    console.log('hitting here')
    const allUsers = await User.findAll()
    res.json(allUsers)
})

module.exports = router