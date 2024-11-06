// const mongoose = require('mongoose');
// require('dotenv').config();
//     //  const mongoURL = 'mongodb://localhost:27017/voting';
//     // const mongoURL = process.env.MONGODB_URL;
//  const mongoURL = process.env.MONGO_URL_LOCAL
// //setup mongodb connection
// mongoose.connect('mongodb://localhost:27017/voting', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });
// // mongoose.connect('mongodb://localhost:27017/voting');

// const db = mongoose.connection;

// db.on('connected', () => {
//     console.log('Connected to MongoDB'); 
// });

// db.on('error', (err) => {
//     console.log('MongoDB connection error');  
// });

// db.on('disconnected', () => {
//     console.log('MongoDB disconnected');
// });  


const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO_URL_LOCAL;

// Setup MongoDB connection
mongoose.connect(mongoURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB'); 
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);  
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
