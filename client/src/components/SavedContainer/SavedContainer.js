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

    savedBooks = () => {
    
        var queryURL = "http://localhost:3001/api/books"
        
        axios.get(queryURL)
        .then(res => {
            const results = res.data;
            console.log(results);
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
                    {this.state.books.map(book => (
                        <BookListCard id={book.volumeInfo.id} key={book.volumeInfo.title} title={book.volumeInfo.title} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.thumbnail} link={book.volumeInfo.infoLink} handleClick={this.handleBookClick}/>

                    ))}
                </div>
            </div>
        )
    }
}

export default SavedContainer;