import React, {  useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';
import BookDetails from './BookDetails';


const BookList = (props) => {
    const { books } = useContext(BookContext);

    return (
        <div className="collection">
            {books.map(book => (<BookDetails book={book} key={book.id} />))}
        </div>
    )
}

export default BookList;