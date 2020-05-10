import React from "react"
import "../assets/header.css"

class Header extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.props.search)
    }
    render() {
        return (
            <div className="header">
                <h1>Great Reads Book Search</h1>
                <h2>"Reading Gives Us Someplace to go when we have to stay where we are" --Mason Cooley</h2>
                <br></br>
                <br></br>
                <h3>To Use the Greate Reads Book Search: <br></br>1. Enter the title of a book to return the details from Google Books.<br></br> 2. Click the view button to purchase a copy. <br></br>3. Click the save button to save to your personal list</h3>
                <form>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Find a Book" value={this.props.search} onChange={this.props.updateInput}></input>
                        <button className="btn input-group-append" onClick={this.handleSubmit}>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Header