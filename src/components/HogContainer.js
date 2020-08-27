import React, { Fragment } from "react";
import HogCard from "./HogCard";

class HogContainer extends React.Component {
  // have access to this.props.hogs (array of hogs)

  renderHogs = () => {
    // map through the array and turn each hog into hog card
    return this.props.hogs.map( hog => {
      return < HogCard key={ hog.name } hog={ hog } />
    })
  }

  render() {
    return (
      <div className="ui grid container">
        {this.renderHogs()}
      </div>
    );
  }
}

export default HogContainer;
