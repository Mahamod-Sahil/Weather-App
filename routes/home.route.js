import express from "express"
import axios from "axios"
import "dotenv/config"


const router = express.Router()

router.get("/", async (req, res) => {

    try {
        const city = req.query.city || "London"
        const { data }  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`)

        // passing api response to  EJS renderer
        res.render("index", { weatherData : data })

    } 
    catch (error) {
        console.error("Error fetching data : ", error)
        res.status(500).send("Error fetching data ! City not found. ")
    }

})


export default router