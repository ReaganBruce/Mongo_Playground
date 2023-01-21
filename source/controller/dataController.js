import dataModel from '../model/dataModel.js'



const getData = async (req, res) => {
    const findData = await dataModel.find()
    try {
        res.status(200).json({
            message: 'Success',
            count: findData.length,
            data: findData
        })
    } catch (err) {
        res.status(404).json({
            message: "Not found"
        })
        console.log(err);
    }
}

const createData = async (req, res) => {
   //const dataBody =  new dataModel({ ...req.body })
   const dataBody = dataModel({
    username: req.body.username,
    location: req.body.location,
    interests: req.body.interests
   })

    try {
        const insertData = await dataBody.save()
        res.status(201).json({
            message: 'Created',
            data: insertData
        })
    } catch (err) {
        res.status(400).json({
            message: "Bad Request",
        })
        console.error(err)
    }
}


export default {
    getData,
    createData
}