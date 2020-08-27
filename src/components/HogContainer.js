import React from 'react'
import HogTile from './HogTile'

class HogContainer extends React.Component {

    imageNameParser = (name) => {
        return name.split(' ').join('_').toLowerCase()
    }

    renderHogTiles = () => {
        return this.props.hogs.map((hog, index) => {
            return (
                <HogTile 
                    key={index}
                    name={hog.name}
                    image={this.imageNameParser(hog.name)}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    highestMedalAchieved={hog['highest medal achieved']}
                />
            )
        })
    }

    render() {
        return (
            <div className="cards ui container">
                {this.renderHogTiles()}
            </div>
        )
    }
}

export default HogContainer;