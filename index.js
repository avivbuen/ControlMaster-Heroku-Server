var express = require('express')
var app = express()
var fs = require('fs')
var url = require('url')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/m8', function(request, response) {
  var q = url.parse(request.url, true).query;
  
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
