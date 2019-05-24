import React, { Component } from 'react';
import DeleteAction from './deleteAction';
import { Link } from 'react-router-dom';

import {Title} from '../style/primitives'

export default class BookIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch("https://book-api-practice-df.herokuapp.com/books", {
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
                <Title>List of books</Title>
                {/* {console.log(this.state.books)} */}
                <div>{this.state.books.map((book) => (
                    // console.log(book)
                    <div key={book[0]}>
                        <h2>Book Title: {book[1]}</h2>
                        <h3>Author: {book[2]}</h3>
                        <DeleteAction id={book[0]} />
                        <Link to={`/view_book/${book[0]}`}>View Book</Link>
                    </div>
                ))}</div>
            </div>
        )
    }
}