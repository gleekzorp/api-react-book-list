import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class UpdateBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            title: '',
            author: '',
            formHidden: true
        }
        this.editBook = this.editBook.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleSubmit() {
    //     event.preventDefault()
    //     let title = this.state.title;
    //     let author = this.state.author;
    //     fetch(`http://localhost:5000/update_book/${this.state.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ title: title, author: author })
    //         // You could do this instead of making the title and author variables
    //         // body: JSON.stringify({
    //         //     title: this.state.title,
    //         //     author: this.state.author
    //         // })
    //     })
    //     .then(response => response.json())
    //     .then(responseData => responseData)
    //     .then(() => {this.props.history.push(`/`)})
    //     .catch(err => console.log("Fetch Error" + err))
    // }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:5000/update_book/${this.state.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author
            })
        })
        .then(response => response.json())
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/')})
        .catch(err => console.log(err))
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    editBook() {
        // console.log(this.props)
        this.props.ourProp[0]
        this.setState({
            id: this.props.ourProp[0],
            title: this.props.ourProp[1],
            author: this.props.ourProp[2],
            formHidden: !this.state.formHidden
        })
    }

  render() {
    return (
      <div className=''>
        <button onClick={this.editBook}>Update This Book</button>
        {/* {console.log(this.state)} */}
        <form onSubmit={this.handleSubmit} style={{visibility: this.state.formHidden ? 'hidden' : 'visible'}}>
            <label>Title</label>
            <input
                type='text'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
            />
            <label>Author</label>
            <input
                type='text'
                name='author'
                value={this.state.author}
                onChange={this.handleChange}
            />
            <input
                type='submit'
                value='submit'
            />
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateBook)