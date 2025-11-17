import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
    const { term } = req.query;
    if (!term) {
        return res.status(400).json({ error: "Missing 'term' parameter" });
    }

    try {
        const apiKey = process.env.GIPHY_API_KEY;
        const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${encodeURIComponent(term)}`;
        const response = await axios.get(url);

        res.json(response.data);
    } catch (error) {
        console.error("Error status:", error.status);
        console.error("Error fetching giphy data:", error.response.data);
        res.status(error.status).json({ error: error.response.data });
    }
});

export default router;