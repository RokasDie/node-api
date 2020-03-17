const express = require('express')
const router = express.Router()

module.exports = app => {
    app.use('/posts', router)
    router.get('/', (req, res, next) => {
        res.status(200).send('Working')
    })
}
