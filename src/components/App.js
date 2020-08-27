import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
//all hogs coming through here
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter";




class App extends Component {
  

  state={
    isGreased : false,
    sortValue : 'none'
  }

  handleGreasedState = () => {
    debugger
    this.setState(prevState => ({isGreased: !prevState.isGreased}))
  }
  
  handleSortState = (sortValue) => {
    this.setState({sortValue})
  }



  render() {
    return (
      <div className="App">
        <Nav />
        <Filter 
        isGreased = {this.state.isGreased}
        changeGreasedState = {this.handleGreasedState}
        sortValue = {this.state.sortValue}
        changeSortState = {this.handleSortState}
        />
        <HogContainer hogs={hogs} />
      </div>
    );
  }
}

export default App;
