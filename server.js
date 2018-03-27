const fs = require('fs'),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

let stringifyFile = '';

app.use(bodyParser.json());

app.get('/getNote', (req, res) => {
	fs.readFile('./test.json', 'utf8', (err, data) => {
		if (err) throw err;
		stringifyFile = data;
		res.send(data);
	});
})

app.post('/updateNote/:note', (req, res) => {
	stringifyFile += req.params.note;
	fs.writeFile('./test.json', stringifyFile, (err) => {
		if (err) throw err;
		console.log('file updated');
	});
})

app.listen(3000);