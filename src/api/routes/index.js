const express = require('express')
const router = express.Router()
const posts = require('./posts')

/* GET home page. */

module.exports = () => {
    const app = router
    posts(app)

    return app
}
