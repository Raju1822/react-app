import axios from 'axios';

const STAFF_API_BASE_URL = "https://spring2n23.herokuapp.com/api/staff";

class StaffService{

    getAllStaff(){
        return axios.get(STAFF_API_BASE_URL);
    }
}

export default new StaffService()