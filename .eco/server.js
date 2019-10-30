const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
// const bodyParser = require('body-parser');

const PORT = process.env.PORT || 80

app.use(cors())
app.use( express.json() )
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get('/', function(req, res){
    console.log('>>> index')
    res.sendFile(path.join(__dirname,'dist','index.html'));
});

app.get('/repo', function (req, res) {

    const file_name =  'repository.json';
    const pathTarget = path.join(__dirname, 'server', file_name)

    // res.sendFile(pathTarget);

    let rawdata = fs.readFileSync(pathTarget);
    let jsonData = JSON.parse(rawdata);
    res.json(jsonData)
});


app.post('/save', function (req, res) {

    let file_content = req.body;

    const file_name =  'repository.json';
    const pathTarget = path.join(__dirname, 'server', file_name)

    let data = JSON.stringify(file_content);
    fs.writeFileSync( pathTarget, data);
});




app.use( express.static(__dirname + '/dist'));

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});