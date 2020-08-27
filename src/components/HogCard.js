import React, { Component } from 'react'
const dotenv = require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env.REACT_APP_API_KEY);
const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=pig&limit=25&offset=0&rating=g&lang=en`;

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
        <div className="description">
          Specialty: { specialty } <br />
          Greased: { greased ? "Yes" : "Nope"} <br />
          Weight: { weight } <br />
          Highest Medal Achieved: { highestMedalAchieved }
        </div>
      )
    }
    return null
  }


  fetchPigGif = (event) => {
    let image = event.target
    fetch(API_URL)
      .then((response) => response.json())
      .then((giphyArray) => {
        const randomURL =
          giphyArray.data[Math.floor(Math.random() * giphyArray.data.length)]
            .images.original.url;
        image.src = randomURL;
      });

  }



  render() {
    const { name, specialty, greased, weight, 'highest medal achieved': highestMedalAchieved } = this.props.hog;

    return (
      
      <div className='ui eight wide column'>
        <div className="ui card">
          <div className="image" onClick={this.fetchPigGif}>
            <img src={ this.getImgSrc(name) } alt={ name } />
          </div>
          <div className="content">
            <a className="header"> { name } </a> <br />
            <button onClick={ e => this.toggleInfoDisplayed() }>Show More Info</button>

            { this.showInfoDiv(specialty, greased, weight, highestMedalAchieved) }

            
          </div>
        </div>
      </div>
    )
  }
}

export default HogCard
