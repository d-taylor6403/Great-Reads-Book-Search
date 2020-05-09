import React from "react";
import "../assets/results.css"
import API from "../utils/API"

class Results extends React.Component {
    handleSave = (id) => {
        API.saveBook(id).then(res => console.log(res.data))
    }
    handleDelete = (id) => {
        API.deleteBook(id).then(() => this.props.getSaved())
    }
    handleButton = (id) => {
        if (this.props.buttonText === "Save") {
            this.handleSave(id)
        }
        else {
            this.handleDelete(id)
        }
    }
    render() {
        return (
            <div className="results">
                <h1>{this.props.status}</h1>

                {this.props.books.map(book => (
                    <div className="result-box" key={book.link}>
                        <hr />
                        <div className="row">
                            <div className="col-md-8">
                                <p className="title">{book.title}</p><br />
                                <p className="authors">Written By: {book.authors.map(author => (<span key={author}>{author} </span>))}</p>
                            </div>
                            <div className="col-md-4">
                                <div className="buttonDiv">
                                    <a className="view btn" href={book.link} target="_blank" rel="noopener noreferrer">View</a>
                                    <button className="save btn" onClick={() => this.handleButton(book._id)} style={this.props.buttonColor}>{this.props.buttonText}</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={book.image} alt="book cover" />
                            </div>
                            <div className="col-md-10">
                                <p className="description">{book.description}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>

        )
    }
};

export default Results;