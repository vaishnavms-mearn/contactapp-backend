//1 import express
const express=require('express')

//2 import cors
const cors=require('cors')

//3 Create a backend application using express
const emsServer=express()

//import logic
const logic = require('./services/logics')

//4 Connecting the front end application with backend using cors
emsServer.use(cors({
    origin:"http://localhost:3000"
}))

//5 Convert The JSON Data to js and js to JSON using json() method
emsServer.use(express.json())

//6 Define the port number
emsServer.listen(8000,()=>{
    console.log("Ems server listening on port 8000");
})
//API call for getting contact details
emsServer.get('/get-all-contacts',(req,res)=>{
    logic.getAllContacts().then((response)=>{//response -all Contact details
        res.status(response.statusCode).json(response);
    })
})
//API call for adding contact
emsServer.post('/add-an-contact',(req,res)=>{
    logic.addContact(req.body.id,req.body.name.firstname,req.body.name.lastname,req.body.email,req.body.phone,req.body.address.city,req.body.address.street,req.body.address.zipcode).then((response)=>{
        res.status(response.statusCode).json(response);
    })
})
//API call for deleting Contact
emsServer.delete('/delete-an-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{//response -all Contact details
        res.status(response.statusCode).json(response);
    })
})
//API call for get an Contact details
emsServer.get('/get-an-contact/:id',(req,res)=>{
    logic.getAnContact(req.params.id).then((response)=>{//response - an Contact details
        res.status(response.statusCode).json(response);
    })
})
emsServer.post('/update-an-contact/:id',(req,res)=>{
    logic.updateContact(req.params.id,req.body.name.firstname,req.body.name.lastname,req.body.email,req.body.phone,req.body.address.city,req.body.address.street,req.body.address.zipcode).then((response)=>{//response - an Contact details
        res.status(response.statusCode).json(response);
    })
})