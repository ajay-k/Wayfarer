import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class CitiesModel {
    static view(){
        console.log('Cities')
        let request = axios.get(`${REACT_APP_API_URL}/cities/all`)
        console.log("Cities request")
        return request
    }

    // static cityShow(id){
    //     console.log('CityShow')
    //     let request = axios.get(`${REACT_APP_API_URL}/cities/cityShow/${id}`)
    //     return request
    // }

    
    //Code for adding a post maybe?
    // static cityShow(userId, cityId) {
    //     console.log('CityShow')
    //     console.log("User id:", userId)
    //     console.log("City id is: ", cityId)
    //     let request = axios.get(`${REACT_APP_API_URL}/cities/cityShow/${userId}/city/${cityId}`)
    //     return request
    // }

    static cityShow(cityId) {
        console.log('CityShow')
        // console.log("User id:", userId)
        console.log("City id is: ", cityId)
        let request = axios.get(`${REACT_APP_API_URL}/cities/cityShow/${cityId}`)
        return request
    }
    
}
