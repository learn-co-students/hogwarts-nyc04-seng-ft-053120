import React from 'react';

class HogTile extends React.Component {

    state = {
        hideDescriptions: true
    }

    handleClick = (event) => {
        this.setState(prevState => ({hideDescriptions: !prevState.hideDescriptions}))
    }

    renderDescriptions = () => {
        if (this.state.hideDescriptions) {
            return (
                <div>
                    <a className="header">{this.props.name}</a>
                    <br/>
                    <br/>
                    <br/>
                </div>
            )
        } else {
            return (
                <div className="description">
                    Specialty: {this.props.specialty}
                    <br/>
                    {this.props.greased ? "Greased" : "Not Greased"}
                    <br/>
                    Weight: {this.props.weight} kilograms
                </div>
            )
        }
    }

    render() {
        return (
            <div onClick={this.handleClick} className="ui eight wide column card">
                    <div className="image">
                        <img src={require(`../hog-imgs/${this.props.image}.jpg`)} alt={this.props.name}></img>
                    </div>
                    <div className="content">
                        {this.renderDescriptions()}
                    </div>
                    
                    <div className="extra content">
                        Highest Medal Achieved: {this.props.highestMedalAchieved}
                    </div>
            </div>
        )
    }
}

export default HogTile;