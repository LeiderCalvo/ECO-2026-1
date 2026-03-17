import express from "express"
import path from "path"
import UsersRouter from "./routes/users/users.router.js"

const PORT = 8080
const __dirname = import.meta.dirname

const app = express()

app.use(express.json())
app.use("/users", UsersRouter)

app.use("/repartidor", express.static(path.join(__dirname, "repartidor/dist")))
app.use("/", express.static(path.join(__dirname, "public")))

app.listen(PORT, () => {
    console.log("listening on port: ", PORT);
})