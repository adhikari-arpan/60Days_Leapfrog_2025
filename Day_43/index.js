const express = require('express');
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

const app = express();
const port = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/URLShortner')
    .then(() => console.log("Mongodb Connected!"))
    .catch(() => console.log("Error Occurred"));;

app.use("url", urlRoute);

app.listen(port, () => console.log(`Server started at Port: ${port}`));