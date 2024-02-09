//1 import db.js file
const db = require("../services/db");

//2 Get all the contact details from database
const getAllContacts = () => {
  return db.contact.find().then((result) => {
    //result- details of Contact
    if (result) {
      return {
        //send to frontend
        statusCode: 200,
        contacts: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "cant find contact",
      };
    }
  });
};
//3 add Contact details into database
const addContact = (id, firstname,lastname, email, phone, city,street,zipcode) => {
  return db.contact.findOne({ id }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "Contact already exists",
      };
    } else {
      // The id is not in database  then save it to database
      const newContact = new db.contact({
        id, name:{firstname,lastname}, email, phone, address:{city,street,zipcode}
      });
      //to save to the database
      newContact.save();
      return {
        statusCode: 200,
        message: "Contact added successfully",
      };
    }
  });
};
//4 Delete Contact
const deleteContact = (id) => {
    return db.contact
      .deleteOne({ id })
      .then((result) => {
        return {
          statusCode: 200,
          message: "Contact Deleted Successfuly",
        };
      })
      .catch((error) => {
        return {
          statusCode: 401,
          message: "Contact Delete",
        };
      });
  };
  const getAnContact=(id)=>{
    return db.contact.findOne({id}).then((result)=>{//result - details of Contact
        if(result){
                return {//send to frontend
                    statusCode:200,
                    contacts:result
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find contact'
                }
        }
    })
  }
  //update an employee details

const updateContact=(id, firstname,lastname, email, phone, city,street,zipcode)=>{
    //updated data
    return db.contact.findOne({id}).then((result)=>{
        //result - details of Contact
        if(result){
            //assiging updated information to the database values
            result.id = id;
            result.name.firstname = firstname;
            result.name.lastname = lastname;
            result.email = email;
            result.phone = phone;
            result.address.city=city;
            result.address.street=street;
            result.address.zipcode=zipcode;

            //save updated details into db
            result.save()

                return {//send to frontend
                    statusCode:200,
                    message:"Contact data updated successfully"
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find contact'
                }
        }
    })
  }

module.exports = {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact,
  getAnContact,

};
