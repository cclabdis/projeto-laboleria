import { Router } from "express"
import { userSchema } from "../schemas/user.schema"


const clientRouter = Router()

clientRouter.post("/clients", validateSchema(userSchema), newClient )
clientRouter.get("/clients/:id/orders", getOrdersByIdClients )

export default clientRouter