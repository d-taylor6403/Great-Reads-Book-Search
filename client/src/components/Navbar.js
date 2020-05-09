import React from "react"
import "../assets/navbar.css"
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (

            <nav className="navbar fixed-top">
                <span className="navbar-brand mb-0 h1">Google Books Search</span>
                <div>
                    <Link to="/">Search</Link>
                    <Link to="/saved">Saved</Link>
                </div>
            </nav>

        )
    }
};

export default Navbar;