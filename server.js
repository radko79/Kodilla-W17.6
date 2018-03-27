const express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

app.use('/store', (req, res, next) => {
	console.log('Jestem pośrednikiem przy żądaniu do /store');
	next();
})

app.get('/', (req, res) => {
	res.send('Privet mir!');
})

app.get('/store', (req, res) => {
	res.send('Eta magazin.');
})

app.listen(3000);

app.use( (req, res, next) => {
	res.status(404).send('YA vvernuta :(');
})