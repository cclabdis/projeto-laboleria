import { db } from "../database/database.connection.js"

export async function postCake(name, image, price, description, flavourId) {
        return db.query(`
            INSERT INTO cakes (name, image, price, description, "flavourId")
                VALUES ($1, $2, $3, $4, $5);
        `, [name, image, price, description, flavourId])
}

export async function getCakeByName(name) {
        return db.query(`
        SELECT * FROM cakes WHERE name = $1
            `, [name])
}

export function postFlavour(name) {
        return db.query(
                `INSERT INTO flavors (name)
            VALUES ($1);`, [name]
        );
}

export function checkFlavour(name) {
        return db.query(
                `SELECT * FROM flavors WHERE name = $1;
                `, [name]
        );
}
export function checkFlavourId(id) {
        return db.query(
                `SELECT * FROM flavors WHERE id = $1;
                `, [id]
        );
}