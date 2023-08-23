import { getCakeById, getOrderById, getOrderInformationByDate, getUserById, postOrder } from "../repositories/orders.repositories.js";


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
                isDelivered: order.isDelivered
            };
        });

        res.status(200).send(ordersInformation)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getOrdersById(req, res){
    const orderId = req.params.id; 
    
    try {
        const result = await getOrderById(orderId);
        if (result.rows.length === 0) {
            res.status(404).send("Pedido não encontrado.");
            return;
        }

        const order = result.rows[0];

        const orderInfo = {
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

        res.status(200).send(orderInfo);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

//PATCH /order/:id
export async function isDelivered(req, res){
    const { orderId } = res.params.id

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
