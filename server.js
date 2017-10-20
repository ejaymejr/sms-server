
express = require('express');
path = require ('path');
bodyParser = require('body-parser');

app = express();
index = require('./routes/index');
backend = require('./routes/backend');

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/src')));
app.use(express.static(path.join(__dirname, 'client/bower_components')));

app.use('/', index);
app.use('/backend', backend);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'client/src'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

app.listen(3000, function(err, res){
    if (!err) {
        console.log('listening to port 3000');
    }else{
        console.log(err);
    }
});




