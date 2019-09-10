const express   = require('express');
const morgan    = require('morgan');
const mongoose  = require('mongoose');
const cors      = require('cors');



const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
console.log(process.env.secret)

// Database setupx
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:auth/auth', { useNewUrlParser: true, useCreateIndex: true});

// Middlewares setup
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// If we are in production serve our clients build  folder
// This folder is created during production only
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Routes setup
const routes = require('./routes');
app.use(routes);




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));