import { db } from "../database/database.connection.js"

export async function postCake(name, image, price, description, flavourId){
    return  db.query(`
            INSERT INTO users (name, image, price, description, "flavourId")
                VALUES ($1, $2, $3, $4, $5, $6);
        `, [name, image, price, description, flavourId])
}


export async function checkCake(name){
        return  db.query(`
                INSERT INTO users (name, image, price, description, "flavourId")
                    VALUES ($1, $2, $3, $4, $5, $6);
            `, [name])
    }
    