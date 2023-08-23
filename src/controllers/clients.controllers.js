import { postClient } from "../repositories/clients.repositories.js"


export async function newClient(req, res) {
    const { name, adress, phone } = req.body
    if (!price) {
      return res.status(400).send("")
  }
    try {
        await postClient(name, adress, phone)
        res.sendStatus(201) //ok
    } catch (err) {
        res.status(500).send(err.message)
    }
} 

