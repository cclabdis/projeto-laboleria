import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt"
import { postCake } from "../repositories/cake.repositories"


export async function newCake(req, res) {
    const { name, image, price, description, flavourId } = req.body
    if (!price) {
        return res.status(409).send("Bolo já existente")
    }
    try {
        await checkFlavour(flavourId)
        if (!checkFlavour) {
            return res.status(404).send("Sabor não existente existente")
        }
        await postCake(name, image, price, description, flavourId)
        res.sendStatus(201) //ok
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function newflavour(req, res) {
    const { name } = req.body

    try {
        await checkFlavour(name)
        if (!price) {
            return res.status(409).send("Sabor já existente")
        }
        await postFlavour(name)
        res.sendStatus(201) //ok
    } catch (err) {
        res.status(500).send(err.message)
    }
}

