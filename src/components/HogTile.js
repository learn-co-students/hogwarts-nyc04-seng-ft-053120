import React, { Component } from 'react'
import HogDetails from './HogDetails'

export default class HogTile extends Component {
    state={
        details: true
    }

    handleOnClick = () => {
        this.setState({
            details: !this.state.details
        })
    }

    render() {
        console.log(this.state)
        let {name, specialty, greased, weight} = this.props.hog
        let imageName = name.toLowerCase().replace(/ /g,"_")
        let pigImage = require(`../hog-imgs/${imageName}.jpg`)
        return (
            <div onClick={this.handleOnClick}>
                <h1>{name}</h1>
                <img src={pigImage} alt={name}/>
                {this.state.details
                && <HogDetails 
                name={name} 
                specialty={specialty} 
                greased={greased} 
                weight={weight} 
                medal={this.props.hog['highest medal achieved']}/>}
            </div>
        )
    }
}
