const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bdDemo', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(db => console.log('database is connected'))
.catch(err => console.log(err))