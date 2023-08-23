import { Router } from "express"
import cakeRouter from "./cake.router.js"
import clientRouter from "./clients.router.js"
import orderRouter from "./orders.router.js"


const router = Router()

router.use(cakeRouter)
router.use(clientRouter)
router.use(orderRouter)

export default router