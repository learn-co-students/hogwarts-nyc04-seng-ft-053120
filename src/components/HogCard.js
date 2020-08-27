import React, { Component } from 'react'

export class HogCard extends Component {
  

  state = {
    infoDisplayed: false
  }

  // function that takes in a pig's name and return the img src
  getImgSrc = (hogName) => {
    const hogFileName = hogName.toLowerCase().split(' ').join('_') + '.jpg';
    return require('../hog-imgs/' + hogFileName);
  };

  toggleInfoDisplayed = () => {
    this.setState(prevState => {
      return {
        infoDisplayed: !prevState.infoDisplayed
      }
    })
  }

  showInfoDiv = (specialty, greased, weight, highestMedalAchieved) => {
    if (this.state.infoDisplayed) {
      return (
        <div class="description">
          Specialty: { specialty } <br />
          Greased: { greased ? "Yes" : "Nope"} <br />
          Weight: { weight } <br />
          Highest Medal Achieved: { highestMedalAchieved }
        </div>
      )
    }
    return null
  }

  render() {
    const { name, specialty, greased, weight, 'highest medal achieved': highestMedalAchieved } = this.props.hog;

    return (
      
      <div className='ui eight wide column'>
        <div class="ui card">
          <div class="image">
            <img src={ this.getImgSrc(name) } />
          </div>
          <div class="content">
            <a class="header"> { name } </a> <br />
            <button onClick={ e => this.toggleInfoDisplayed() }>Show More Info</button>

            { this.showInfoDiv(specialty, greased, weight, highestMedalAchieved) }

            
          </div>
        </div>
      </div>
    )
  }
}

export default HogCard
