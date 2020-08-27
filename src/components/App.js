import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
//all hogs coming through here
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";



class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer hogs={hogs} />
      </div>
    );
  }
}

export default App;
