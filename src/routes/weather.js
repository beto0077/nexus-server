import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ error: "Missing 'city' parameter" });
    }

    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=us&key=${apiKey}&contentType=json`;
        const response = await axios.get(url);

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;