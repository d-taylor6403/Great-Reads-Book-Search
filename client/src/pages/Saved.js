import React from "react";



class Saved extends React.Component {
    state = {
        saved: [],
        btnColor: { background: '#4484CE' }
    }
    componentDidMount() {
        this.getSaved()
    }
    getSaved = () => {
        API.getAllBooks()
            .then(res => {
                this.setState({ saved: res.date })
            })
    }
    render() {
        return (
            <div>
                <SavedHeader />
                <Results
                    books={this.state.saved}
                    status="Saved Books:"
                    buttonText="Delete"
                    buttonColor={this.state.btnColor}
                    getSaved={this.getSaved}
                />
            </div>
        )
    }

}

export default Saved