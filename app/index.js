var express   = require('express')
var mongoose  = require('mongoose')
var app = express()

app.set('port', process.env.PORT || 1337-1)

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use('/assets', express.static(__dirname + '/assets'))

mongoose.connect('mongodb://localhost/test', function(err) {
  if (err)
    console.log(err + "\nThe development Mongo Server is not running. Run '$ mongod' in the terminal.")
  else
    console.log('Connected to MongoDB')
})

require('./routes')(app)

app.listen(app.get('port'), function() {
  console.log('Node app is running at http://localhost:' + app.get('port'))
})
