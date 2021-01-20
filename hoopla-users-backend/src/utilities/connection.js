const { Schema } = require('mongoose');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);

const url = "mongodb://localhost:27017/HooplaDB"

const productsSchema = Schema( {
  _id: { type: String, required: [true, '_id is required'] },
  name: { type: String, required: [true, 'name is required'] },
  description: { type: String, required: [true, 'description is required'] },
  rating: { type: Number, required: [true, 'rating is required'] },
  category: { type: String, required: [true, 'category is required'] },
  price: { type: Number, required: [true, 'price is required'] },
  color: { type: String, required: [true, 'color is required'] },
  image: { type: String, required: [true, 'image is required'] },
  specification: { type: String, default: "" },
  dateFirstAvailable: { type: Date, default: new Date().toISOString() },
  dateLastAvailable: { type: Date, default: new Date().toISOString() },
  availability: { type: Number, required: [true, 'availability is required'] },
  

}, { collection: "Products", timestamps: true } )


const usersSchema = Schema({
  userId: { type: String, required: [true, 'userId is required'] },
  uCredentials: {
    uEmail: { type: String, required: [true, 'uMail is required'] },
    uPass: { type: String, required: [true, 'uPass is required'] }
  },
  uProfile: {
    uName: { type: String, required: [true, 'uName is required'] },
    uDOB: { type: Date, required: [true, 'uDOB is required'] },
    uPhone: { type: Number, required: [true, 'uPhone is required'] },
    uIsSeller: { type: Boolean, default: false },
    uDateJoined: { type: Date, default: new Date().toISOString() },
    uLastLogin: { type: Date, default: new Date().toISOString() },
    //uaddress:{type:String,required:[true,'Address is required'],min:[10,"Minimum number of characters should be 10"]}
  }
}, { collection: "Users", timestamps: true })



let connection = {}

//Returns model object of "Users" collection
connection.getCollection = () => {
  
  
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(database => {
    return database.model('Users', usersSchema)
  }).catch(error => {
    let err = new Error("Could not connect to the database");
    err.status = 500;
    throw err;
  });
}

connection.productsCollection = () => {
  //Establish connection and return model as promise
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(database => {
    return database.model('Products', productsSchema)
  }).catch(error => {
    let err = new Error("Could not connect to the database");
    err.status = 500;
    throw err;
  });
}

module.exports = connection;