import React from "react";

class HogTile extends React.Component {

  state = {
    display: "image",
    hidden: false
  }

  handleClick = (event) => {
    this.setState({
      display: this.state.display === "details" ? "image" : "details"
    })
  }

  handleHide = (event) => {
    this.setState({
      hidden: true
    })
  }

  renderDisplay = () => {
    if (this.state.display === "image") {
      return <img src={this.props.img} />
    }
    else {
      return (<span>
        <p>{this.props.specialty}</p>
        <p>{(this.props.greased) ? "Greased!" : "Not Greased"}</p>
        <p>{this.props.weight}</p>
        <p>{this.props.highestMedalAchieved}</p>
      </span>)
    }
  }

  render() {
    const { name, img, specialty, greased, weight, highestMedalAchieved } = this.props
    // console.log(this.state)
    return (
      <div hidden={this.state.hidden} onClick={this.handleClick}>
        <h2>{name}</h2>
        <button onClick={this.handleHide}>Hide</button>
        {this.renderDisplay()}
      </div>
    )
  }
}

export default HogTile;
