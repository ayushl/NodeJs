var express = require('express');
var app = express();


// app.set('view engine', 'html');
app.use(express.static(__dirname + '/src/views'));

app.get('/', (req, res) => {      
    res.sendFile('index.html', {root: __dirname});   
});

app.listen(8080);
console.log('Server is listening on port 8080');