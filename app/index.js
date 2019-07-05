const app = require( "express" )()
const port = 8888

app.get( "/", ( request, response, next) => {
  response.send( { "hello": "olaaa" } )
} )

app.listen( port, () => console.log( `Listening on ${port }` ) )
