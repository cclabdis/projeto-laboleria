import { postClient } from "../repositories/clients.repositories.js"


export async function newClient(req, res) {
    const { name, address, phone } = req.body
    try {
        await postClient(name, address, phone)
        res.sendStatus(201) //ok
    } catch (err) {
        res.status(500).send(err.message)
    }
} 

