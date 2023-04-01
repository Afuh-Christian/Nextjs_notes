import ImageModel from "./model"


const handler = async (req, res) => {

    const all = await ImageModel.find()
    return res.status(200).json(all)

}

export default handler