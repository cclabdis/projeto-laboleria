import { Router } from "express"
import { cakeSchema } from "../schemas/cake.schema.js"
import { newCake, newflavour } from "../controllers/cakes.controllers.js"
import validateSchema from "../middlewares/schema.midlleware.js"
import { flaworSchema } from "../schemas/flawor.schema.js"

const cakeRouter = Router()

cakeRouter.post("/cakes", validateSchema(cakeSchema), newCake )
cakeRouter.post("/flavours", validateSchema(flaworSchema), newflavour )

export default cakeRouter