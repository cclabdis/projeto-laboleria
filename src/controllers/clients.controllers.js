import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt"
import { postCake } from "../repositories/cake.repositories"
import { postClient } from "../repositories/clients.repositories"


export async function newClient(req, res) {
    const { name, adress, phone } = req.body
    if (!price) {
      return res.status(400).send("")
  }
    try {
        await postClient(name, adress, phone)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
} 

// - **Response:** status **201**, sem dados.
// - **Regras de negócio**
//     - `name` não pode ser **vazio** ⇒  deve retornar **status 400.**
//     - `address` não pode ser **vazio** ⇒ deve retornar **status 400.**
//     - `phone` não pode ser vazio e deve ser uma **string** com 10 ou 11 caracteres numéricos ⇒ nesse caso deve retornar **status 400.**
