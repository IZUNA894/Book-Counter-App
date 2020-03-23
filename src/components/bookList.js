import React ,{useContext} from 'react';
import {BookContext} from "../context/bookContext";

const BookList = ()=>{
    var {books,addBooks,deleteBooks} = useContext(BookContext);
    var booksObj = books.map((book)=>{
        return(
            <li onClick = {()=>deleteBooks(book.id)}>{book.title}<br/>
                author:-{book.author}</li>
        )
    })

    return(
        <div className="book-list">
            <ul  >
                {booksObj}
            </ul>
        </div>
    )
}

export default BookList