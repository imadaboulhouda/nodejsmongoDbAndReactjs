const  express = require('express');
const bodyParser = require('body-parser'); 
const DB = require('mongoose');
const app = express();
app.use(bodyParser.json());
const routers = require('./routers/router');
const link = require('./config/key').key;
DB.connect(link,{ useNewUrlParser: true }).then(()=>{
    console.log("Good COnnected....");
}).catch(err=>console.log('error',err)); 

app.use('/items',routers);

app.listen(5000);

 