import React, { Component } from 'react'

export default class HogDetails extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>Specialty: {this.props.specialty}</p>
                <p>Greased?: {this.props.greased ? 'yes' : "no"}</p>
                <p>Weight: {this.props.weight}</p>
                <p>Medal: {this.props.medal}</p>
            </div>
        )
    }
}
