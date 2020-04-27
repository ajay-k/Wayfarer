import React, { Component } from 'react';
import CityModel from '../models/city'

class City extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        isLoaded: false,
        url: '',

    }

    componentDidMount() {
        console.log('I am in componentDIDMOUNT')
       CityModel.cityShow(this.props.match.params.id)
        .then((res) => {
            console.log('Found the City')
            console.log(res)
            this.setState({
                name: res.data.name,
                description: res.data.description,
                image: res.data.image,
                isLoaded: true,
                url: this.props.match.params.id

            })
        })
        .catch((err) => console.log(err))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('I am in componentDIDUPDATE')
        // Typical usage (don't forget to compare props):
        if (this.props.match.params.id !== this.state.url) {
            CityModel.cityShow(this.props.match.params.id)
                .then((res) => {
                    console.log('Found the City')
                    console.log(res)
                    this.setState({
                        name: res.data.name,
                        description: res.data.description,
                        image: res.data.image,
                        isLoaded: true,
                        url: this.props.match.params.id

                    })
                })
                .catch((err) => console.log(err))
        }
        
    }

    render() {
        console.log('i am in RENDER')
        return (
            <div>
           
                        <h3>{this.state.name}</h3>
                        <h3>{this.state.description}</h3>
                        <h3>{this.state.image}</h3>
            
            </div>
        );
    }
}

export default City;
