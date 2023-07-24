const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/routes/route-doa');
app.use('/', appRoute);

app.listen(5050, ()=>{
    console.log('Server Berjalan di Port : 5050');
});
