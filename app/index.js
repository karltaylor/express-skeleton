var express = require('express')
var app = express()

app.set('port', 1337-1);

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use('/assets', express.static(__dirname + '/assets'))

// Require routes
require('./routes')(app)

app.listen(app.get('port'), function() {
  console.log('Node app is running at http://localhost:' + app.get('port'))
})
