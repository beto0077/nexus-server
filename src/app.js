import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import weatherRoutes from "./routes/weather.js";
import giphyRoutes from "./routes/giphy.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/weather", weatherRoutes);
app.use("/api/giphy", giphyRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Nexus Server running on port ${PORT}`);
});