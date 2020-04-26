import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class ProfileModel {
    static view(id) {
    		console.log("ID IS: ")
    		console.log(id)
        let request = axios.get(`${REACT_APP_API_URL}/user/view/${id}`)
        return request
    }
}