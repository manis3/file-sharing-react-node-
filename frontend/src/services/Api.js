import axios from 'axios';
const api = 'http://localhost:8000'

export const uploadFiles = async (data) => {
    try{
        const config = {
            headers:{
                'Content-Type':'multipart/form-data',
                'Accept':'application/json',
            }
        }
        const response = await axios.post(`${api}/upload/image`,data,config)
        return response.data;

    }
    catch(err){
        console.error(err.message);
    }
}