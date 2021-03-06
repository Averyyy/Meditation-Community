require('./db');
require('./auth');

const passport = require('passport');
const express = require('express');
const path = require('path');
const cors = require("cors");
const cookieParser = require("cookie-parser");

// const mongoose = require('mongoose');

const routes = require('./routes/login_regi');

const app = express();

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'secret cookie thang (store this elsewhere!)',
    resave: true,
      saveUninitialized: true
};
app.use(session(sessionOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(
  cors()
);

// {
//   origin: "http://localhost:3000", // <-- location of the react app were connecting to
//   credentials: true,
// }
app.use(cookieParser("secretcode"));
// passport setup
app.use(passport.initialize());
app.use(passport.session());
// require('./passportConfig')(passport);

app.use('/', routes);
app.use('/api', require('./routes/api'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'..','client','build','index.html'));
});

const port = process.env.PORT || '4000';
app.listen(port, () => console.log(`Server started on Port ${port}`));





// old code in template

// const routes = require('./routes/index');
// const list = require('./routes/list');
// const listItem = require('./routes/list-item');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// make user data available to all templates
// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

// app.use('/', routes);
// app.use('/list', list);
// app.use('/list-item', listItem);