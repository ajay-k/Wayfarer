import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"


export default class PostModel {
    static view(id, postId) {
        console.log("ID IS: ")
        console.log(id)
        let request = axios.get(`${REACT_APP_API_URL}/user/view/${id}/post/${postId}`)
        return request
    }