import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {


  ogHogs = hogs;

  state = {
    hogs: this.ogHogs
  }

  // function that will sort the hogs by either name or weight
  sortHogs = (sortParam) => {
    if (sortParam !== 'all') {
      const copyHogs = [...this.state.hogs];

      const sortedHogs = copyHogs.sort((a, b) => {
        if (a[sortParam] < b[sortParam]) return -1;
        if (a[sortParam] > b[sortParam]) return 1;
        return 0
      });
      
      this.setState({ hogs: sortedHogs })
    } else {
      this.displayAllHogs();
    }
    
  }

  // function that will change state.hogs into an array of only greased hogs
  displayGreasedHogs = () => {
    const greasedHogArr = [...this.state.hogs].filter(hog => hog.greased)
    this.setState( { hogs: greasedHogArr })
  }

  // function that will display all hogs
  displayAllHogs = () => {
    this.setState({ hogs: this.ogHogs })
  }

  hideHogs = () => {
    this.setState({ hogs: [] })
  }

  render() {

    return (
      <div className="App">
        <Nav 
          hogs={ this.state.hogs }
          sortHogs={ this.sortHogs }
          displayGreasedHogs={ this.displayGreasedHogs }
          displayAllHogs= { this.displayAllHogs }
          hideHogs={this.hideHogs}
        />
        <HogContainer hogs={ this.state.hogs }/>
      </div>
    );
  }
}

export default App;
