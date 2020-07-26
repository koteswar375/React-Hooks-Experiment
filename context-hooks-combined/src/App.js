import React from 'react';
import BookContextProvider from './Contexts/BookContext';
import NavBar from './Components/NavBar';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';

function App() {
  return (
    <div className="container">
      <BookContextProvider>
        <NavBar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
