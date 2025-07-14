const express = require('express');
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require('./models/url');

const app = express();
const port = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/URLShortner')
    .then(() => console.log("Mongodb Connected!"))
    .catch(() => console.log("Error Occurred"));;

app.use(express.json());

app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
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