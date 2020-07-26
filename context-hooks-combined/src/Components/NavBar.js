import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const NavBar = (props) => {
    const { books } = useContext(BookContext);

    return (
        <div className="center-align">
            <h1>Books List</h1>
            <p>Currently, there are {books.length} books in the book list</p>
        </div>
        
    )
};

export default NavBar;