import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class CitiesModel {
    static view(){
        console.log('Cities')
        let request = axios.get(`${REACT_APP_API_URL}/cities/all`)
        return request
    }

    static cityShow(id){
        console.log('CityShow')
        let request = axios.get(`${REACT_APP_API_URL}/cities/cityShow/${id}`)
        return request
    }
}
