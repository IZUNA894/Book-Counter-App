import React ,{useContext,useState} from 'react';
import {BookContext} from "../context/bookContext";

const BookForm = ()=>{
    var {books,addBooks} = useContext(BookContext);
    var [author,setAuthor]  = useState('')
    var [title,setTitle] = useState('');

    var handleChangeAuthor = (e)=>{
        setAuthor(e.target.value);
    }
    var handleChangeTitle = (e)=>{
        setTitle(e.target.value);
    }
    var handleSubmit = (e)=>{
        e.preventDefault();
        if(author === "" || title === '')
        return;
        console.log(e);
        addBooks(title,author);
        setAuthor('');
        setTitle('');
    }
    var booksObj = books.map((book)=>{
        return(
            <li>
            <div className="title">{book.title}</div>
            <div className="author">author:-{book.author}</div>
            </li>
        )
    })

    return(
        <form onSubmit={handleSubmit}>

            <input type="text" onChange={(e)=>handleChangeTitle(e)} placeholder="Enter Book title" value={title}/>
            <input type="text" onChange={(e)=>handleChangeAuthor(e)} placeholder="Enter Book author" value={author}/>
            <input type="submit" value="Add Book"/>
        </form>
    )
}

export default BookForm