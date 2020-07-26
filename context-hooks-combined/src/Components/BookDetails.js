import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);

    return (
        <div className="collection-item" onClick={() => dispatch({type:'REMOVE_BOOK', id: book.id})}>
            <h5 class="title">{book.title}</h5>
            <p>{book.author}</p>
        </div>
    )
}

export default BookDetails;