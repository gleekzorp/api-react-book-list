import React from 'react';
import { Link } from 'react-router-dom';

function DeleteLanding(props) {

    return (
        <div>
            <h1>You deleted a book</h1>
            <Link to={{pathname: "/"}}>View All Books</Link>
        </div>
    )
}

export default DeleteLanding