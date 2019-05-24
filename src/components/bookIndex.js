import React, { Component } from 'react';
import DeleteAction from './deleteAction';
import { Link } from 'react-router-dom';

import { Title, Subtitle, FlexArea, BookCard } from '../style/primitives'

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
                <Title color="blue">List of books</Title>
                <FlexArea flexDirection="column" alignItems="center">{this.state.books.map((book) => (
                    <BookCard key={book[0]}>
                        <Subtitle>Book Title: {book[1]}</Subtitle>
                        <h3>Author: {book[2]}</h3>
                        <FlexArea justifyContent="space-evenly">
                            <DeleteAction id={book[0]} />
                            <Link to={`/view_book/${book[0]}`}>View Book</Link>
                        </FlexArea>
                    </BookCard>
                ))}</FlexArea>
            </div>
        )
    }
}