import express from "express"
import path from "path"
import UsersRouter from "./routes/users/users.router.js"
import cors from "cors"

const PORT = 8080
const __dirname = import.meta.dirname

const app = express()

app.use(cors())
app.use(express.json())
app.use("/users", UsersRouter)

app.use("/", express.static(path.join(__dirname, "public")))

app.post("/login", (req, res) => {
    const credentials = req.body
    if(credentials.email === "lc@gmail.com" && credentials.pas === "passwordSecure"){
        res.send({ accessToken: "kdjwedkbwjekdbwekdwed.wedbkwjebdkjwed.webdkwedbwkejbd"})
    } else {
        res.send({ message: "Error invalido"})
    }
})

app.listen(PORT, () => {
    console.log("listening on port: ", PORT);
})