import React, { useContext } from 'react';
import { BookContext } from "../contexts/BookContext"

const Navbar = () => {

    const {books} = useContext(BookContext) 
    const numberOfBooks = books.length > 0 ? books.length : "no"
    const bookOrBooks = books.length === 1 ? "book" : "books"

    return (
        <div className="nav">
            <h1>Reading List</h1>
            <p>Currently you have {numberOfBooks} {bookOrBooks} to get through.....</p>
        </div>
    );
}
 
export default Navbar;