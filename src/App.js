import React from 'react';
import Navbar from "./components/Navbar"
import BooksList from './components/BooksList';
import BookForm from "./components/BookForm"
//Context Providers...
import BookContextProvider from "./contexts/BookContext"

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BooksList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
