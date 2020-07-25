import React from 'react';
import Navbar from "./components/Navbar.jsx"
import BooksList from './components/BooksList.jsx';
import BookForm from "./components/BookForm.jsx"
//Context Providers...
import BookContextProvider from "./contexts/BookContext.jsx"

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
