import React, { Component } from 'react';
import DeleteAction from './deleteAction';
import UpdateBook from './updateBook';

export default class ViewBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            singleBook: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        // const id = this.props.match.params.id
        fetch(`http://localhost:5000/book/${id}`, {
            method: "GET",
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            singleBook: data
        }))
        .catch(err => console.log("Fetch Error" + err))
    }

  render() {
    return (
      <div className=''>
        <h1>Book information</h1>
        <div>ID: {this.state.singleBook[0]}</div>
        <div>Title: {this.state.singleBook[1]}</div>
        <div>Author: {this.state.singleBook[2]}</div>
        {/* {console.log(this.props)} */}
        {/* {console.log(this.state.singleBook)} */}
        <DeleteAction id={this.state.singleBook[0]} />
        <UpdateBook ourProp={this.state.singleBook}/>
      </div>
    );
  }
}