import axios from "axios" 

const baseUrl = "http://localhost:3000"
export const createPost = async (form) => {
    try {
        const res = await axios.post(`${baseUrl}/api/createImagetest/create/`, form,         {
            // headers:{
            //     'accept': 'application/json',
            //     'Accept-Language': 'en-US,en;q=0.8',
            //     'Content-Type': "multipart/form-data",
            // }
        })
        return res.data
    } catch (err) {
        return console.log(err)
    }
}