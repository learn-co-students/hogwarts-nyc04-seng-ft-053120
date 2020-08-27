import React from "react";
// import hogs from "../porkers_data.js"
import HogTile from "./HogTile"

class HogListings extends React.Component {

  state = {
    filtered: false
  }

  camelCaseParser = (name) => {
    return name.split(" ").join("_").toLowerCase()
  }

  renderHogTiles = () => {
    return this.props.hogs.map((hog, index) => {
      return <HogTile className="card ui eight wide column"
        key={index}
        img={require('../hog-imgs/' + this.camelCaseParser(hog.name) + '.jpg')}
        name={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        highestMedalAchieved={hog['highest medal achieved']}
      />
    })
  }

  render() {
    return (
      <div className="ui cards grid container">
        {this.renderHogTiles()}
      </div>
    );
  }
}

export default HogListings;
