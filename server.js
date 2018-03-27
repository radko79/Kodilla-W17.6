var fs = require('fs');
var express = require('express');
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
	fs.readFile('./test.json', 'utf8', function(err, data) {
		if (err) throw err;
		stringifyFile = data
		res.send(data);
	});
})

app.post('/updateNote/:note', function(req, res) {
	fs.writeFile('./test.json', stringifyFile, function(err) {
		If (err) throw err;
		console.log('file updated');
	});
})

var server = app.listen(3000);