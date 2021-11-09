import axios from "axios";

export default class PostService{
    static async getAll(limit=10,page=1){ 
    const response= await axios.get('http://localhost:3000/dishes',{
        params:{
            _limit:limit,
            _page:page
        }
    })
    return response
    }
    static async getById(id) {
        const response = await axios.get('http://localhost:3000/dishes/' + id)
        return response;
    }
}
