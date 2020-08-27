import React from 'react'

class HogItems extends React.Component {


    state = {
        isClicked: false
    }

    getImage = hogName => {

        let formattedName = hogName
            .split(" ")
            .join("_")
            .toLowerCase();

        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    };

    handleClicked = () => {
        this.setState(prevState => {
            return { isClicked: !prevState.isClicked }
        })
    }



    render() {
        console.log(this.props.hog)
        return (
            <div onClick={this.handleClicked} className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={this.getImage(this.props.hog.name)} alt="pig" />
                    </div>
                    <div className="header">
                            <a>{this.props.hog.name}</a>
                        </div>
                    {this.state.isClicked ? 
                    <div className="content">
                        
                        <div className="meta">{this.props.hog.specialty}</div>
                        
                        <div className="description">
                            Weight: {this.props.hog.weight} lbs.</div>
                    </div>
                    : ""}
                </div>
            </div>
        )
    }
}


export default HogItems