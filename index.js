const express = require("express");
const {connectToMongo} = require("./connection")
const urlRoute = require("./routes/url");
const URL = require("./models/url")
const { log } = require("node:console");
const { handleGetAnalytics, handleAnalyticRequest } = require("./controllers/url");
const app = express();
const PORT = 8001;


connectToMongo("mongodb://127.0.0.1:27017/short-url").then(() => console.log("MongoDB connected")
);

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:short", async (req, res) => {
    const shortId = req.params.short;
    const entry = await URL.findOneAndUpdate(
        {
        shortId
        },
        {$push: {
            visitHistory: {
                timestamp : Date.now(),
            }
        },
    });
    console.log(entry.redirectURL);
    res.redirect(entry.redirectURL);
});



app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
