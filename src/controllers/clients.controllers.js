import { getOrderByClient, postClient } from "../repositories/clients.repositories.js"


export async function newClient(req, res) {
    const { name, address, phone } = req.body
    try {
        await postClient(name, address, phone)
        res.sendStatus(201) //ok
    } catch (err) {
        res.status(500).send(err.message)
    }
} 

export async function getOrdersByClientId(req, res){
    const  clientId  = req.params.id

    try{
        const result = await getOrderByClient(clientId);
        if (result.rows.length === 0) {
            res.status(404).send("Nenhum pedido encontrado para este cliente.");
            return;
        }
               
        const orderInfo =  result.rows.map(order => ({
            orderId: order.orderId,
            quantity: order.quantity,
            createdAt: order.createdAt,
            totalPrice: order.totalPrice,
            cakeName: order.cakeName,
        }));


        res.status(200).send(orderInfo);
        }
     catch (err) {
        res.status(500).send(err.message);
    }
}
