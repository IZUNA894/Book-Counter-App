import React,{Component,useState,createContext} from 'react';

export const BookContext = createContext();

const BookContextProvider =(props)=>{
 var [books,setBooks] = useState([
     {id:1,title:"Noah's ark",author:"Christopher"},
     {id:2,title:"Last symbol",author:"Lenardo"},
     {id:3,title:"Red soul",author:"Tony Cherrind"}
     
 ]);
 var addBooks = (title,author)=>{
     setBooks([...books,{id:Math.random(),author,title}]);
 }
 var deleteBooks = (id)=>{
     var booksObj = books.filter((book)=>{
         return(book.id !== id)
     })
     setBooks([...booksObj]);
 }

 return(
     <BookContext.Provider value={{books,addBooks,deleteBooks}}>
         {props.children}
     </BookContext.Provider>
 )
}

export default BookContextProvider
