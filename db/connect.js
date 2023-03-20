const mongoose = require('mongoose');

// const connectionString = "mongodb+srv://mh15721812:15721812@cluster0.owthrxo.mongodb.net/TaskManger?retryWrites=true&w=majority";

const connectDB = (uri) => {
    return mongoose
        .connect(uri);
};

module.exports = connectDB;
