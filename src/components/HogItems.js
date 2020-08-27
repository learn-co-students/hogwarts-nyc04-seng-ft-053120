import React from "react";

class HogItems extends React.Component {
  getImage = (hogName) => {
    let formattedName = hogName.split(" ").join("_").toLowerCase();

    let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
    return pigPics;
  };

  render() {
    console.log("hog from items:", this.props.hog);
    // const {name, specialty, weight} = {...this.props}
    return (
      <div className="ui eight wide column">
        <div className="image">
          <img
            src={this.getImage(this.props.hog.name)}
            alt="{this.props.hog.name}"
          />
        </div>
        <p>{this.props.hog.name}</p>
      </div>
    );
  }
}

export default HogItems