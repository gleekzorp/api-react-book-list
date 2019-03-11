import React, { Component } from 'react';

export default class BookIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/books", {
            method: "GET",
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            books: data
        }))
        .catch(err => console.log("Fetch Error" + err))
    }
    render() {
        return (
            <div className="books">
                <h1>List of books</h1>
                <h2>{this.state.books.map((book) => (
                    <div key={book[0]}>
                        <h2>Book Title: {book[1]}</h2>
                        <h3>Author: {book[2]}</h3>
                    </div>
                ))}</h2>
                {console.log(this.state.books)}
            </div>
        )
    }
}