import React, { Component } from "react";
import axios from "axios";
import Jumbotron from "../Jumbotron/Jumbotron";
import BookListCard from "../BookList/bookListCard"

class SavedContainer extends Component {
    
    state = {
        books: []
    };

    componentDidMount() {
        console.log("Mounted");
        this.savedBooks();
    }

    deleteBook = (id) => {
    //    console.log("Deleted Book ID:" + id) 
        axios.delete("/api/books/" + id)
        .then(() => {
            console.log("Deleted Book ID: " + id)
            this.savedBooks()
        })
        .catch((e) => {
        console.log("Error Deleting Book ID: " + id)
        })
        
    }
    

    savedBooks = () => {
    
        var queryURL = "/api/books"
        
        axios.get(queryURL)
        .then(res => {
            const results = res.data;
            // console.log(results);
            this.setState({books: results });                
        }) 
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Jumbotron/>
                </div>
                <div className="row">
                    {this.state.books.map(book => {
                        let image = ""

                        if(book.image) {
                         image = book.image 
                        }
                            else {image = "https://via.placeholder.com/128x150?text=No+image"}
        
                        // console.log(image) 

                        return <BookListCard id={book._id} key={book.title} title={book.title} description={book.description} image={book.image} link={book.link} handleClick={this.deleteBook}/>

                    }
                    )}
                </div>
            </div>
        )
    }
}

export default SavedContainer;