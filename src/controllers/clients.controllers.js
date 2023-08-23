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

//GET  /clients/:id/orders
export async function getOrdersByClientId(req, res){
//     const { id } =req.locals
    // [
    //     {
    //         "orderId": 1,
    //         "quantity": 2,
    //         "createdAt": "2022-03-16 10:30",
    //         "totalPrice": 26.00,
    //         "cakeName": "Bolo de pote"
    //     }
    // ]

//     - Caso não exista um cliente com o `id` passado ⇒ deve retornar **status 404**.
// - Em caso de sucesso ⇒ deve retornar **status 200** e as informações conforme o exemplo.

}
