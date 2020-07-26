import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:"Shawshank Redemption", id:1},
        {title:"Truth triumphs", id:2},
        {title:"Homo Sapiens", id:3},
        {title:"Way of life", id:4},
    ]);

    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
};

export default BookContextProvider;