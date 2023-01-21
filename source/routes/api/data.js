import express from 'express'
import dataController from '../../controller/dataController.js'

const router = express.Router()


//GET: localhost:3000/api/home
router.get('/home', dataController.getData)


//POST: localhost:3000/api/home
router.post('/home', dataController.createData)

export default router