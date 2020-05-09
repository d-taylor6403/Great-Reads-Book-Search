import React from "react";
import "../Header/Header.css"

class Header extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.props.search)
    }

    render() {
        return (
            <div className="header">
                <h1>Great Reads <br></br>
                "The Journey of a Lifetime starts with the <br></br>turning of a page." - Rachel Anders</h1>
                <br></br>

                <h2>Enter the name of a book of interest below</h2>
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