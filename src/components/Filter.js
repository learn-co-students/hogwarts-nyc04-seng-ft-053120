import React, { Fragment } from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <label>
          Show Greasy
        <input type="checkbox" onChange={this.props.onChangeHandler} checked={this.props.showGreasy}/>
        </label>
        <p>
          Sort
        <select value={this.props.sortBy} onChange={this.props.sortHandler}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        </p>
      </div>
    );
  }
}

export default Filter;
