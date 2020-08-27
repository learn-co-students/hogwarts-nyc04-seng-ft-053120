import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Options from "./Options"

class App extends Component {
  state = {
    filtered: false,
    sort: "name",
  }

  renderHogs = () => {
    let filteredHogs = hogs

    if (this.state.filtered) {
      filteredHogs = hogs.filter(hog => hog.greased)
    } else {
      filteredHogs = hogs
    }

    filteredHogs.sort((hog1, hog2) => hog1[this.state.sort] > hog2[this.state.sort] ? 1 : -1)
    return filteredHogs
  }

  handleFilter = () => {
    this.setState({
      filtered: !this.state.filtered
    })
  }

  handleSort = () => {
    this.setState(prevState => ({
      sort: prevState.sort === "name" ? "weight" : "name"
    }))
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Options handleSort={this.handleSort} handleFilter={this.handleFilter} filtered={this.state.filtered} />
        <HogContainer hogs={this.renderHogs()} />
      </div>
    );
  }
}

export default App;
