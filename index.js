import express from "express"
import "dotenv/config"
import homeroute from "./routes/home.route.js"

const app = express()

//Serving public folder as static file 
app.use(express.static("public"))

//setting ejs as viewengine
app.set("view engine", "ejs")

//using express router 
app.use("/", homeroute)



app.listen(process.env.PORT || 8000, () => {
    console.log("App started !")
})
