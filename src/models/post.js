import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"


export default class PostModel {
    static view(userId, postId) {
        console.log("ID IS: ")
        console.log(userId)
        console.log(postId)
        let request = axios.get(`${REACT_APP_API_URL}/user/view/${userId}/post/${postId}`)
        return request
    }
}