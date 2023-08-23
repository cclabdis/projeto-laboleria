import { db } from "../database/database.connection.js"

export async function getCakeById(cakeId) {
    return db.query(`
    SELECT * FROM cakes WHERE id = $1;
        `, [cakeId])
}

export async function getUserById(clientId) {
    return db.query(
    `SELECT * FROM clients WHERE id = $1;
        `, [clientId])
}

export async function postOrder(clientId, cakeId, quantity, totalPrice) {
    return db.query(`
    INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice")
    VALUES ($1, $2, $3, $4);

        `, [clientId, cakeId, quantity, totalPrice])
}





