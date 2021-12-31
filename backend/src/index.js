const app = require('./app');

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   /* eslint-disable no-console */
//   console.log(`Listening: http://localhost:${port}`);
//   /* eslint-enable no-console */
// });

const express = require('express');
const mongoose = require('mongoose');
const crudRoutes = require('./api');


const MONGODBURL = "mongodb+srv://tanvir:5992@epitaph.gntgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.json());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(crudRoutes);
app.use(express.static(__dirname + '/../backend'));

app.use((error, req, res, next) => {

    console.log(error);
    res.status(error.statusCode || 500).json({
        message: error.message,
        data: error.data
    });

});

mongoose.connect(MONGODBURL)
    .then(result => {        
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.log(error);
    });

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
    });

