import React from 'react';
import { Link } from 'react-router-dom';

function DeleteAction(props) {
    function bookDelete() {
        fetch(`https://book-api-practice-df.herokuapp.com/delete/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json()})
        .catch(err => {
            console.log("Delete Fetch Error", err)
        })
    }

    return (
        <div>
            <Link onClick={bookDelete} to={{pathname: "/deleted_book"}}>Delete</Link>
        </div>
    )
}

export default DeleteAction