const shortid = require('shortid');
const model = require('../models/url')

async function handleGenerateNewShortURL(req, res) {

    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is required" });

    const shortID = shortid();
    await model.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHidtory : [],
    })

    return res.json({ id: shortID});
}

module.exports = {
    handleGenerateNewShortURL,
}