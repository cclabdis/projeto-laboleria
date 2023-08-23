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

export async function getOrderInformationByDate(date) {
    let query = `
        SELECT
            o.id as "orderId",
            c.id as "clientId",
            c.name as "clientName",
            c.address as "clientAddress",
            c.phone as "clientPhone",
            ca.id as "cakeId",
            ca.name as "cakeName",
            ca.price as "cakePrice",
            ca.description as "cakeDescription",
            ca.image as "cakeImage",
            o."createdAt",
            o.quantity,
            o."totalPrice",
            o."isDelivered"
        FROM
            orders o
            INNER JOIN clients c ON o."clientId" = c.id
            INNER JOIN cakes ca ON o."cakeId" = ca.id`;

    const queryParams = [];

    if (date) {
        query += " WHERE DATE(o.\"createdAt\") = $1";
        queryParams.push(date);
    }

    const result = await db.query(query, queryParams);
    return result.rows;
}