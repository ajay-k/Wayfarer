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
   
    componentDidMount() {
       CitiesModel.view()
       .then((res) => {
           console.log('Cities', res)
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
                    <div className='citiesContainer col-md-4'>
                        <h1>Cities</h1>
                        <div>
                            {
                                this.state.isLoaded ?
                                    <div>{this.state.cities.map(function (city, index) {
                                        return <Link to={{pathname: `/cities/${this.state.cities[index]._id}`}} > <h2>{city.name}</h2></Link>
                                    }, this)}</div>
                                    :
                                    <p>Not Loaded</p>
                            }
                        </div>
                    </div>

                    <div className='cityDetailContainer; col-md-8'>
                        <Route path="/cities/:id" component={City} />
                    </div>
                </div>
            </div>
        );
        
    }
}

export default Cities;
