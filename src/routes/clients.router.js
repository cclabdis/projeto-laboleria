import { Router } from "express"
import { userSchema } from "../schemas/user.schema.js"
import validateSchema from "../middlewares/schema.midlleware.js"
import { newClient } from "../controllers/clients.controllers.js"
import { getOrdersById } from "../controllers/orders.controllers.js"



const clientRouter = Router()

clientRouter.post("/clients", validateSchema(userSchema), newClient )
clientRouter.get("/clients/:id/orders", getOrdersById )

export default clientRouter