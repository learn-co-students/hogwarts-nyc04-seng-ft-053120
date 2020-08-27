import React from 'react'

class Options extends React.Component {

    render() {
        return (
            <div className="navWrapper">
                <label for="greased">Greased: </label>
                <input onChange={this.props.handleFilter} name="greased" type="checkbox" checked={this.props.filtered}></input>
                <br/>
                <label for="sort">Sort By: </label>
                <select onChange={this.props.handleSort} name="sort">
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
        )
    }
}

export default Options;