
// 3) file 3


const express = require('express')
const router = express.Router()
// controller file
const employeeController = require('../controllers/employeeController')



// Route methods :
// GET, POST, PUT/PATCH, DELETE

// POST
// http://localhost:5000/employees/add-emp  -At postman
router.post('/addemp',employeeController.createEmployee)



// GET 
// To get allemployees data we can check at browser 5000
// http://localhost:5000/employees/allemployees
router.get('/allemployees',employeeController.getEmployees)

// GET
// To showing  single employee record
// http://localhost:5000/employees/singleemployee/659cee5e845757404514e042
router.get('/singleemployee/:id',employeeController.singleEmployee)



// UPDATE 
// http://localhost:5000/employees/update/659cee95845757404514e048
router.put('/update/:id',employeeController.updateEmployee)


// // DELETE 
// http://localhost:5000/employees/delete/659cee95845757404514e048
router.delete('/delete/:id',employeeController.deleteEmployee)

module.exports = router

// after that we have to create middleware to register routes for that we have to go inside of server.js file




