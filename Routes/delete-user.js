const express = require('express')

const router = express.Router()


router.delete('/delete-user/:id', async (req, res, next) => {
    const uid = req.params.id
    await User.destroy({where: {id: uid}})
    res.sendStatus(200)
})

exports = router