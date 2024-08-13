const express = require('express')
const router = express.Router()

const studentController = require('../controllers/index')

router.get('/', studentController.getAllStudents)

router.get('/:id', studentController.getSingleStudent)

router.post('/', studentController.createStudent)

router.patch('/:id', studentController.updateStudent)

router.delete('/:id', studentController.deleteStudent)

module.exports = router