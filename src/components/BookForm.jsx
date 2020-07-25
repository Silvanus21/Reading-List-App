import React, { useState, useContext } from 'react';
import { BookContext } from "../contexts/BookContext.jsx"

const BookForm = () => {

    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    return (
        <form onSubmit={(event) => {
            event.preventDefault()

            if(title.trim() !== "" || author.trim() !== "") {
                dispatch({type : "ADD_BOOK", book : { title, author }})

                setTitle("")
                setAuthor("")
            }
        }}>
            <input
                type="text"
                placeholder="Enter Title.."
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)} 
                autoComplete="off"
                />
            <input
                type="text"
                placeholder="Enter Author.."
                name="author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                autoComplete="off"
                />
            <button className="form-btn">ADD BOOK</button>
        </form>
    );
}

export default BookForm;


