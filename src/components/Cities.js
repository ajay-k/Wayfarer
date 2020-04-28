import React, { Component } from 'react';
import CitiesModel from '../models/city'
import {Link , NavLink, Route} from 'react-router-dom'
import City from '../components/City'

class Cities extends Component {
   
    state = {
        cities: [],
        isLoaded: false,
        cityId: '',
    } 
   
    //We have access to this.props.currentUser
    componentDidMount() {
       CitiesModel.view()
       .then((res) => {
           console.log('Cities in Mount', res)
           this.setState({
               cities: res.data,
               isLoaded: true,
           })
       })
    }

    render() {
        return (
            <div className='Container col-md-12'>

                <div className="row">
                    <div className='citiesContainer col-md-4 mt-5'>
                        <h1>Cities</h1>
                        <div>
                            {
                                this.state.isLoaded ?
                                    <div>{this.state.cities.map(function (city, index) {
                                        return  <div class="card-horizontal bg-light mb-3">
                                            <img class = "img-city-square-wrapper" src={city.image} alt="cityImage"></img>
                                            <Link to={{pathname: `/cities/${this.state.cities[index]._id}`}} ><h2 class="text-dark card-text align-middle ml-3 pt-4">{city.name}</h2></Link>
                                            </div>
                                    }, this)}</div>
                                    :
                                    <p>Not Loaded</p>
                            }
                        </div>
                    </div>

                    <div className='cityDetailContainer; col-md-8'>
                        <City {...this.props}/>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default Cities;
