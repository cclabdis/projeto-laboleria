import { Router } from "express"
import { userSchema } from "../schemas/user.schema.js"
import validateSchema from "../middlewares/schema.midlleware.js"
import { getOrdersByClientId, newClient } from "../controllers/clients.controllers.js"

const clientRouter = Router()

clientRouter.post("/clients", validateSchema(userSchema), newClient )
clientRouter.get("/clients/:id/orders", getOrdersByClientId )

export default clientRouter