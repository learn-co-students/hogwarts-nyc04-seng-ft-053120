import React, { Component } from 'react'
import hogs from '../porkers_data'
import HogTile from './HogTile'

export default class HogContainer extends Component {
    
    render() {
        return (
            <div>
                <h1>Hog Container</h1>
                {this.props.hogs.map(hog=> <HogTile key={hog.name} hog={hog}/>)}
            </div>
        )
    }
}
