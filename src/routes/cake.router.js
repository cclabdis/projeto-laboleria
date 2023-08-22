import { Router } from "express"
import { cakeSchema } from "../schemas/cake.schema"


const cakeRouter = Router()

cakeRouter.post("/cakes", validateSchema(cakeSchema), newCake )

export default cakeRouter