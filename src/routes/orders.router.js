import { Router } from "express"
import validateSchema from "../middlewares/schema.midlleware.js"
import { orderSchema } from "../schemas/order.schema.js"
import { getOrders, getOrdersById, isDelivered, newOrder } from "../controllers/orders.controllers.js"


const orderRouter = Router()

orderRouter.post("/order", validateSchema(orderSchema), newOrder )
orderRouter.get("/orders/", getOrders )
orderRouter.get("/orders/:id", getOrdersById )
orderRouter.patch("/orders/:id", isDelivered )

export default orderRouter