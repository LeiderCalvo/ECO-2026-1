import express from "express"
import UsersController from "./users.controller.js"

const router = express.Router()

router.get("/", UsersController.getAllUsers)

router.get("/:id", UsersController.getUserById)

export default router