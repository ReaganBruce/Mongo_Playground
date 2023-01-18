import express from 'express'
import dataController from '../../controller/dataController.js'

const router = express.Router()

//POST: localhost:3000/api/home
router.post('/home', dataController.createData)

export default router