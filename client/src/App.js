import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Search from "./pages/Search";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Search} />

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;