const express = require('express');
const app = express();
const port = 8000;

const { connectMongoDb } = require("./connection");
const userRouter = require('./routes/user');

//Connection
connectMongoDb('mongodb://127.0.0.1:27017/mongoTest');

//Middleware
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/user", userRouter);

app.listen(port, () => console.log(`Server started at port ${port}`));
