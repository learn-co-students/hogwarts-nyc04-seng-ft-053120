import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {

  const handleSortSelection = (evt) => {
    props.sortHogs(evt.target.value)
  }

  const handleGreasedCheckbox = (evt) => {
    (evt.target.checked) 
      ? props.displayGreasedHogs()
      : props.displayAllHogs()
  }

  const handleHogDisplay = (evt) => {
    (evt.target.checked) 
      ? props.hideHogs()
      : props.displayAllHogs()
  }


  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>

        <span> 
          <span>Sort By: </span>
          <select onChange={ handleSortSelection }>
            <option value="" disabled selected>Select your option</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
            <option value="all">All</option>
          </select>
        </span>

        <span>
          <label>
            Greased Hogs Only 
            <input
              type="checkbox"
              onChange={ handleGreasedCheckbox }
            />
          </label>
          <label>
            Hide Hogs 
            <input
              type="checkbox"
              onChange={handleHogDisplay }
            />
          </label>
        </span>
        



      </div>
      

    </div>
  );
};

export default Nav;
