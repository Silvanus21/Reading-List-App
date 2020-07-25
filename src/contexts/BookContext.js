import React, { useState, createContext } from 'react';
import uuid from "uuid/v1"

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([])

    const addBook = (title, author) => {
        setBooks(preValue => {
            return [
                ...preValue,
                {title : title, author : author, id : uuid()}
            ]
        })
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, removeBook, addBook}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;