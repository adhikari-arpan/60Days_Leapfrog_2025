const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { connectToMongoDB } = require("./connect");
const { restrictToLoggedinUserOnly, checkAuth } = require('./middlewares/auth');
const URL = require('./models/url');

const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');

const app = express();
const port = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/URLShortner')
    .then(() => console.log("Mongodb Connected!"))
    .catch(() => console.log("Error Occurred"));;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
//Specifies that view engine is ejs and next specifies views ko file haru views vanney folder ma xa

app.use(express.json());
app.use(express.urlencoded({ estended: false }));
// This middleware helps to support for form data
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home', {
        urls: allUrls,
    });
})

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        });
    if (!entry) {
        return res.status(404).send("Short URL not found");
    }
    res.redirect(entry.redirectURL);
});

app.listen(port, () => console.log(`Server started at Port: ${port}`));