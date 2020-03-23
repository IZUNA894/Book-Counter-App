import React from 'react';
import BookList from "./components/bookList"
import BookForm from "./components/bookForm";
import BookContextProvider from "./context/bookContext";
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        
        <BookList/>
        
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
