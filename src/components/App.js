import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from './Filter'

class App extends Component {
  state={
    showGreasy: true,
    sortBy: "name"
  }

  sortHogs() {
    if (this.state.sortBy==="name"){
      return hogs.sort((hog1,hog2)=>hog1.name.localeCompare(hog2.name))
    } else if (this.state.sortBy==="weight"){
      return hogs.sort((hog1,hog2)=>hog1.weight-hog2.weight)
    }
  }

  filteredHogs(sortedHogs) {
    return sortedHogs.filter(hog => {
      if (this.state.showGreasy){
        return hog.greased
      }else{
        return true
      }
    })
  }

  handleOnChange = event => {
    this.setState({
      showGreasy: event.target.checked
    })
  }

  handleSort = event => {
    this.setState({
      sortBy: event.target.value
    })
  }

  render() {
    let sortedHogs = this.sortHogs()
    let filteredHogs = this.filteredHogs(sortedHogs)
  
    return (
      <div className="App">
        <Nav />
        <Filter onChangeHandler={this.handleOnChange} showGreasy={this.state.showGreasy} sortBy={this.state.sortBy} sortHandler={this.handleSort}/> 
        <HogContainer hogs={filteredHogs}/>
      </div>
    );
  }
}

export default App;
