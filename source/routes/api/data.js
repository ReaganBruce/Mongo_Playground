import express from 'express'
import dataModel from '../../model/dataModel.js'

const router = express.Router()

//POST: localhost:3000/api/home
router.post('/home', async (req, res) => {
    const dataBody = new dataModel({ ...req.body }) //dataModel obj spread to req.body obj.. using just for now
    try {
        const insertNewData = await dataBody.save()
        res.status(201).json({
            message: 'Created',
            data: insertNewData
        })
    } catch (err) {
        res.status(400).json({
            message: "Bad Request"
        })
        console.err(err)
    }
})

export default router