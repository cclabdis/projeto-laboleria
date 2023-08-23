import { checkFlavour, checkFlavourId, getCakeByName, postCake, postFlavour } from "../repositories/cake.repositories.js"

export async function newCake(req, res) {
    const { name, image, price, description, flavourId } = req.body

    try {
        const existingCake = await getCakeByName(name);
        if (existingCake.rowCount === 1) {
            return res.status(409).send("Bolo já existente");
        }

        const flavorExists = await checkFlavourId(flavourId);
        if (flavorExists.rowCount === 0) {
            return res.status(404).send("Sabor não encontrado");
        }

        await postCake(name, image, price, description, flavourId)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function newflavour(req, res) {
    const { name } = req.body

    try {

        const flavorExists = await checkFlavour(name);
        if (flavorExists.rowCount === 1) {
            return res.status(409).send("Sabor já existente.");
        }

        await postFlavour(name);
        res.sendStatus(201); // Created
    } catch (err) {
        res.status(500).send(err.message)
    }
}

