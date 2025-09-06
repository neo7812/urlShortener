const express = require("express");
const path = require("path");
const urlRouter = require("./routes/url");
const { connectDB } = require("./connect");
const URL = require("./models/url");
const app = express();
const PORT = 3000;


connectDB('mongodb://127.0.0.1:27017/urlShortener')
    .then(() => console.log("Connected to MongoDB"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use("/url", urlRouter);


app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const urlEntry = await URL.findOne({ shortUrl: shortId });
    if (urlEntry) {
        urlEntry.visitHistory.push({ timestamp: new Date() });
        await urlEntry.save();
        return res.redirect(urlEntry.originalUrl);
    } else {
        return res.status(404).json({ error: "Short URL not found" });
    }    
});       

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});