import { Router } from "express"
import cakeRouter from "./cake.router"
import clientRouter from "./clients.router"
import orderRouter from "./orders.router"


const router = Router()

router.use(cakeRouter)
router.use(clientRouter)
router.use(orderRouter)

export default router