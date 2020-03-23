import React ,{useContext} from 'react';
import {BookContext} from "../context/bookContext";

const Navbar = ()=>{
    var {books} = useContext(BookContext);
    

    return(
        <div className="navbar" >
            <h1>Book Counter App</h1>
            <p>{ books.length >0 ? `you have ${books.length} to read` : 'no books left to read' }</p>

        </div>
    )
}

export default Navbar