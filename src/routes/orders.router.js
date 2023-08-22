import { Router } from "express"


const orderRouter = Router()

orderRouter.post("/order", validateSchema(orderSchema), newOrder )
orderRouter.get("/orders/", getOrders )
orderRouter.get("/orders/:id", getOrdersById )
orderRouter.patch("/orders/:id", patchOrder )

export default orderRouter