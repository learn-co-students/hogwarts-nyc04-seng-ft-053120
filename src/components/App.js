import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogListings from "./HogListings";
import Filter from "./Filter";

class App extends Component {

  state = {
    hogs: hogs.sort((a, b) => (a.name > b.name) ? 1 : -1),
    sort: "name",
    filtered: false
  }

  filterHogs = () => {
    console.log(this.state.filtered)
    this.setState({
      hogs: (!this.state.filtered) ? hogs.filter(hog => hog.greased) : hogs
    })
  }

  sortHogs = () => {
    console.log(this.state.sort)
    this.setState(previousState => ({
      hogs: previousState.hogs.sort((a, b) => (a[this.state.sort] > b[this.state.sort]) ? 1 : -1)
    }))
  }

  handleFilter = (event) => {
    this.setState(previousState => ({
      filtered: !previousState.filtered
    }))
    this.filterHogs()
  }

  handleSort = (event) => {
    event.persist()
    this.setState(previousState => ({
      sort: event.target.value,
      hogs: previousState.hogs.sort((a, b) => (a[event.target.value] > b[event.target.value]) ? 1 : -1)
    }))
  }

  render() {
    // this.sortHogs()
    console.log(this.state)
    return (
      <div className="App">
        <select onChange={this.handleSort} >
          <option value="name">name</option>
          <option value="weight">weight</option>
        </select>
        <Nav />
        <Filter handleFilter={this.handleFilter} filtered={this.state.filtered} />
        <HogListings hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
