const{ Schema } = require( 'mongoose' );
const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;

mongoose.set( 'useCreateIndex', true );

const url = "mongodb://localhost:27017/HooplaDB"

const cartsSchema = Schema( {
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
  quantity: { type: Number, required: [true, 'quantity is required'] },
  OderDate: { type: String, required: [true, 'OderDate is required'] },
  TotalCost: { type: Number, required: [true, 'TotalCost is required'] },
  OderDateSort: { type: String, required: [true, 'OderDateSort is required'] },

}, { collection: "Carts", timestamps: true } )

let connection = {}

//Returns model object of "Users" collection


connection.cartsCollection = () => {
  //Establish connection and return model as promise
  return mongoose.connect( url, { useNewUrlParser: true, useUnifiedTopology: true } ).then( database => {
    return database.model( 'Carts', cartsSchema )
  } ).catch( error => {
    let err = new Error( "Could not connect to the database" );
    err.status = 500;
    throw err;
  } );
}

const CartProductsSchema = Schema( {
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
  

}, { collection: "ProductsCart", timestamps: true } )

connection.CartproductsCollection = () => {
  //Establish connection and return model as promise
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(database => {
    return database.model('ProductsCart', CartProductsSchema)
  }).catch(error => {
    let err = new Error("Could not connect to the database");
    err.status = 500;
    throw err;
  });
}

module.exports = connection;