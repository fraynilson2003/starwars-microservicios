import { Router } from "express"
import * as store from "../database/index.js"

const router = Router()

router.get("/:model", async (req, res) => {
    console.log("entro");
    const { model } = req.params
    const response = await store[model].list()
    res.status(200).json({
        message: `${model} extraido corretamente`,
        data: response
    })
})

router.get("/:model/:id", async (req, res) => {
    const { model, id } = req.params
    const response = await store[model].getOne(id)
    res.status(200).json({
        message: `${model} extraido corretamente`,
        data: response
    })
})



export default router