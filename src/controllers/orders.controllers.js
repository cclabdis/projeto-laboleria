import { getCakeById, getOrderInformationByDate, getUserById, postOrder } from "../repositories/orders.repositories.js";


export async function newOrder(req, res) {
    const { clientId, cakeId, quantity, totalPrice} = req.body
    
    try {
        const existingCake = await getCakeById(cakeId);
        if (existingCake.rowCount === 0) {
            return res.status(404).send("Bolo não cadastrado")
        }

        const existingUser = await getUserById(clientId);
        if (existingUser.rowCount === 0) {
            return res.status(404).send("usuário não cadastrado")
        }
    
        await postOrder(clientId, cakeId, quantity, totalPrice)
        res.sendStatus(201) //ok
    } catch (err) {
        res.status(500).send(err.message)
    }
} 

export async function getOrders(req, res){
    const { date } = req.query;
    try {
        const orders = await getOrderInformationByDate(date);

        if (orders.length === 0) {
            return res.status(404).send(orders)
        }

        const ordersInformation = orders.map(order => {
            return {
                client: {
                    id: order.clientId,
                    name: order.clientName,
                    address: order.clientAddress,
                    phone: order.clientPhone,
                },
                cake: {
                    id: order.cakeId,
                    name: order.cakeName,
                    price: order.cakePrice,
                    description: order.cakeDescription,
                    image: order.cakeImage,
                },
                orderId: order.orderId,
                createdAt: order.createdAt,
                quantity: order.quantity,
                totalPrice: order.totalPrice,
            };
        });

        res.status(200).send(ordersInformation)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function isDelivered(req, res){
    const { id } = res.locals

    try {
        await patchOrder(isDelivered)
        res.sendStatus(204) //ok
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// - Adicionar a rota **PATCH** `/order/:id`
//     - Deve alterar o status da coluna ***isDelivered*** para `true`.
//     - **Regras de negócio**
//         - Caso o `id` não exista ⇒ deve retornar **status 404**.
//         - Caso o `id` não seja válido ⇒ deve retornar **status 400**.



//clients
export async function getOrdersById(req, res){
    const { id } =req.locals
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