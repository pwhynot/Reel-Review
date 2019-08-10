const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/userInfo');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(
    db,
    { useNewUrlParser: true }
  )
    .then( () => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/userInfo', users);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));