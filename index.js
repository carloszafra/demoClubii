const express = require('express');
const path = require('path');
const handleBars = require('express-handlebars');

const exJs = express();

//database
require('./database');

exJs.set('port', process.env.PORT || 3003);
exJs.set('views', path.join(__dirname, 'views'));
exJs.engine('.hbs', handleBars({
    
    layoutsDir: path.join(exJs.get('views'), 'layouts'),
    partialsDir: path.join(exJs.get('views'), 'partials'),
    extname: '.hbs'
    
}) )

exJs.set('view engine', '.hbs');

exJs.use(express.urlencoded({extended: false}));


exJs.use('/public', express.static(path.join(__dirname, './public')));


//routes
exJs.use(require('./routes/index'));

//server
exJs.listen(exJs.get('port'), () => {
    console.log('App listening on port', exJs.get('port'));
});

