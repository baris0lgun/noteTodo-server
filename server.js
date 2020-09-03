var express = require('express');

var app = express();

const port = 3001;


app.get('/', (req, res) => {
    res.send('{"hello": "world"}');
})

app.get('/notes', (req,res) => {
	res.send('[{"1": "note1"}, {"2": "note2"}]');
});
app.listen(port, () => {
	console.log(`todo server is running on http://localhost:${port}`)
});
