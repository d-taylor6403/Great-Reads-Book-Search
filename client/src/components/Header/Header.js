import React from "react";
import "./header.css"

class Header extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.props.search)
    }

    render() {
        return (
            <div className="header">
                <h1>Great Reads</h1>
                <h2>The Journey of a Lifetime starts with the turning of a page. - Rachel Anders</h2>
                <h3>Search for and Save Books of Interest</h3>
                <form>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Find A Book" value={this.props.search} onChange={this.props.updateInput}></input>
                        <button className="btn input-group-append" onClick={this.handleSubmit}>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Header