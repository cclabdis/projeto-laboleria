import { db } from "../database/database.connection.js"

export async function postClient(name, address, phone){
    return  db.query(`
            INSERT INTO clients (name, address, phone)
                VALUES ($1, $2, $3);
        `, [name, address, phone])
}


export async function getOrderByClient(clientId) {
        return db.query(`
        SELECT
        c.id as "clientId",
        o.id as "orderId",
        o."createdAt",
        o.quantity,
        o."totalPrice",
        ca.name as "cakeName"
    FROM
        clients c
        INNER JOIN orders o ON c.id = o."clientId"
        INNER JOIN cakes ca ON o."cakeId" = ca.id
    WHERE
        c.id = $1`, [clientId]);
}