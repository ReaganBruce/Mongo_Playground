import dataModel from '../model/dataModel.js'


const createData = async (req, res) => {
    const dataBody =  new dataModel({ ...req.body }) //dataModel obj spread to req.body obj.. using just for now
    try {
        const insertData = await dataBody.save()
        res.status(201).json({
            message: 'Created',
            data: insertData
        })
    } catch (err) {
        res.status(400).json({
            message: "Bad Request"
        })
        console.error(err)
    }
}

export default {
    createData
}