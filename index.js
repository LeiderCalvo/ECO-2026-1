import express from "express"
import UsersRouter from "./routes/users/users.router.js"

const PORT = 8080

const app = express()

app.use(express.json())
app.use("/users", UsersRouter)

app.get("/", (req, res) => {
    res.send("hola sí funciona")
})

app.listen(PORT, () => {
    console.log("listening on port: ", PORT);
})