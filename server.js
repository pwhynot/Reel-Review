const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');
const reviews = require('./routes/api/reviews');

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

app.use('/api/users', users);
app.use('/api/reviews', reviews);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

app.use(function(req, res, next) {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "production" ? err : {};
 
    res.status(err.status || 500);
    res.render("error");
  });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} `));