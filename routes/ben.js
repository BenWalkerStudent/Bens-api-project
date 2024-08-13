const express = require('express')
const router = express.Router()

const benController = require('../controllers/index')

router.get('/', benController.myRoute)

module.exports = router