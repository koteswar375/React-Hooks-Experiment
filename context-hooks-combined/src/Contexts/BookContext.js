import React, {createContext,  useReducer} from 'react';
import bookReducer from '../Reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [
        {title: 'Word power made easy', author: 'Norman Lewis', id:1},
        {title: 'Reset', author: 'subramanian swamy', id:2},
        {title: 'Homo Sapiens', author: 'Yuval Nove Harris', id:3}
    ]);

    // const addBook = ({book,author}) => {
    //     setBooks((prev) => ([...prev, {title: book, author, id: uuidv4()}]))
    // };

    // const removeBook = (id)=> {
    //     setBooks(books.filter(book => book.id !== id))
    // };

    return (
        <BookContext.Provider value={{dispatch, books}}>
            {props.children}
        </BookContext.Provider>
    )

};

export default BookContextProvider;