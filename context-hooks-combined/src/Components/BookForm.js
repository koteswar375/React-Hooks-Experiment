import React, { useContext, useState } from 'react';
import { BookContext } from '../Contexts/BookContext';


const BookForm = (props) => {
    const { dispatch } = useContext(BookContext);
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');

    const handleSubmit = () => {
        dispatch({action:'ADD_BOOK',book:title, author});
        setAuthor('');
        setTitle('');
    }

    return (
        <div className="center-align">
            <form>
                <div class="row">
                    <div class="input-field col s6">
                        <input value={title} id="title" type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Name of the book" />
                    </div>
                    <div class="input-field col s6">
                        <input value={author} id="author" type="text" onChange={(e)=>setAuthor(e.target.value)} placeholder="Author" />
                    </div>
                </div>
            </form>
            <button className="btn " onClick={handleSubmit}>Add Book</button>
        </div>
    )
};

export default BookForm;