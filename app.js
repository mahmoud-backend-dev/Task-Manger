const express = require('express');
const app = express();
const path = require('path');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/error-handler');


// middleware

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        const port = process.env.PORT || 1812;
        app.listen(port, console.log(`Listen server in http://localhost:${port}`));
    } catch (error) {
        console.log(error)
    }
};

start();