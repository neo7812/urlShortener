const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.originalUrl) {
    return res.status(400).json({ error: "originalUrl is required" });
  }
  const { nanoid } = await import("nanoid");

  const shortUrl = nanoid(8);
  await URL.create({
    originalUrl: body.originalUrl,
    shortUrl: shortUrl,
    visitHistory: [],
  });
  return res.status(201).json({ id: `http://localhost:3000/${shortUrl}` });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortUrl: shortId });
  if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  return res.status(200).json({
    clicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
} 



module.exports = { handleGenerateNewShortURL , handleGetAnalytics };
