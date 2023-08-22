import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt"
import { postCake } from "../repositories/cake.repositories"


export async function newCake(req, res) {
    const { name, image, price, description, flavourId } = req.body
    if (!price) {
      return res.status(400).send("")
  }
    try {
        await postCake(name, image, price, description, flavourId)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
} 

// - `name` não pode ser um nome de um bolo já existente ⇒ deve retornar **status 409.**