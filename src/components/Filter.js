import React from "react";

class Filter extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <label name="filter">Greased!</label>
        <input onClick={this.props.handleFilter} name="filter" type="checkbox" checked={this.props.filtered}>
        </input>
      </div>
    );
  }
}

export default Filter;
