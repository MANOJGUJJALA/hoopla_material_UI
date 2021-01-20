const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const errorLogger = require( './utilities/errorlogger' );
const requestLogger = require( './utilities/requestlogger' );
const router = require( './routes/routing' );
// const create = require( './model/dbSetup' );
const cors = require( 'cors' )
let port = 2222;

app.use( cors() );
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) )
app.use( requestLogger );
app.use( '/cart', router );
app.use( errorLogger );



app.listen( port );
console.log( 'Service started at ' + port );

