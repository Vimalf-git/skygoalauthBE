import utilsModel from '../../Model/UserModel/utilsData.js';

const getdata = async (req, res) => {
    try {
        let dbData = await utilsModel.find();
        if (dbData) {
            res.status(200).send({ message: 'fetch successully', util: dbData[0].tittle })
        }else{
            res.status(400).send({message:'no data found'})
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export default { getdata }