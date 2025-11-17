import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
    const { location } = req.query;
    if (!location) {
        return res.status(400).json({ error: "Missing 'location' parameter" });
    }

    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=us&key=${apiKey}&contentType=json`;
        const response = await axios.get(url);

        res.json(response.data);
    } catch (error) {
        console.error("Error status:", error.status);
        console.error("Error fetching weather data:", error.response.data);
        res.status(error.status).json({ error: error.response.data });
    }
});

export default router;