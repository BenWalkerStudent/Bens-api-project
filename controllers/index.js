const mongodb = require('../db/connect')
const ObjectId = require('mongodb').ObjectId

const awesomeFunction = (Req, res) => {
  res.send("Hello World!");
};

const tooeleTech = (Req, res) => {
  res.send("Tooele Tech is Awesome!");
};

const myRoute = (req,res) => {
  res.send('hello from the house env built')
}

//student routes
const getAllStudents = async (req,res) => {
  try {
    const result = await mongodb.getDb().db().collection('students').find()
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(lists)
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

//GET single contact
const getSingleStudent = async (req, res) => {

  try {
    const userId = new ObjectId(req.params.id)
    const result = await mongodb
      .getDb()
      .db()
      .collection('students')
      .find({ _id: userId})
    result.toArray().then((lists) => {
      res.setHeader('Content-Type','application/json')
      res.status(200).json(lists[0])
    })
  } catch (error) {
    res.status(500).json(error)
  }

}
//CREATE contact
const createStudent = async (req, res) => {
  try {
    const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    currentCollege: req.body.currentCollege
    }

    const response = await mongodb 
      .getDb()
      .db()
      .collection('students')
      .insertOne(student)
    if (response.acknowledged) {
      res.status(201).json(response)
    } else {
      res
      .status(500)
      .json(
        response.error || 'some error occurred while creating the student'
      )
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

//update one student
const updateStudent = async (req,res) => {
  try {
    const userId = new ObjectId(req.params.id)
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    }

    const response = await mongodb 
      .getDb()
      .db()
      .collection('students')
      .replaceOne({_id:userId}, student)
      if (response.acknowledged) {
        res.status(204).json(response)
      } else {
        res.status(500).json(response.error || 'Some error occured while updating the student')
      }
  } catch (error) {
    res.status(500).json(error)
  }
}

//delete one student
const deleteStudent = async (req,res) => {

  try {
    const userId = new ObjectId(req.params.id)
    const response = await mongodb 
    .getDb()
    .db()
    .collection('students')
    .deleteOne({_id: userId}, true)
    if(response.acknowledged) {
      res.status(200).send(response)
    } else {
      res.status(500).json(response.error || "Some error occured while deleting the student.")
    }
  } catch (error) {
    res.status(500).json(error)
  }

}

  module.exports = {myRoute, awesomeFunction, tooeleTech, getAllStudents, getSingleStudent, createStudent, updateStudent, deleteStudent };