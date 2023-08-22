import { db } from "../database/database.connection.js"

export async function postClient(name, image, price, description){
    return  db.query(`
            INSERT INTO users (name, image, price, description)
                VALUES ($1, $2, $3, $4, $5);
        `, [name, image, price, description])
}
