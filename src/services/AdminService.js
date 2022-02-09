import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/api/admin";

class AdminService{

    getAdmin(){
        return axios.get(ADMIN_API_BASE_URL);
    }
}

export default new AdminService()