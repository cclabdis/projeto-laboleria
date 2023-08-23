import { getCakeById, getUserById, postOrder } from "../repositories/orders.repositories.js";


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
    const { id }  = req.locals


    // retornar nesse formato
    // [
    //     {
    //          "client": {
    //              "id": 1,
    //              "name": "Fulana",
    //              "addresss": "Rua tal",
    //              "phone": "2199999999"
    //          },
    //          "cake": {
    //                      "id": 1
    //              "name": "Bolo de pote",
    //              "price": 13.00,
    //                      "description": "Bolo de chocolate com recheio de leite ninho",
    //                      "image": "encurtador.com.br/iDIX0"
                    //      "flavourId:1"    //          },
    //              "orderId": 1,
    //          "createdAt": "2022-03-16 10:30",
    //          "quantity": 2,
    //          "totalPrice": 26.00
              //"isDelivered": false
    //          }
    //  ]

//     - Pode receber uma **query string** `date` com o formato `YYYY-MM-DD` ⇒ nesse caso deve retornar apenas os pedidos da data especificada.
// - Caso não tenha nenhum pedido ⇒ deve retornar um **array vazio** com **status 404**.
// - Em caso de sucesso ⇒ deve retornar **status 200** e ****os dados conforme o exemplo.
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