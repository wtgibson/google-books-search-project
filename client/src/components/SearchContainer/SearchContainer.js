import React, { Component } from "react";
import axios from "axios";
import BookListCard from "../BookList/bookListCard";
import SearchForm from "../SearchForm/SearchForm";
// import api from "../../../../routes/api";
import Jumbotron from "../Jumbotron/Jumbotron";

class SearchContainer extends Component {
    state = {
        search: "",    
        books: []
    };

    // Used query as substring and axios.get all matching Google Books API results
    searchBooks = query => {
        // api.search(query)
        // .then(res => this.setState)
        var queryURI = encodeURI(query);

        var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + queryURI

        axios.get(queryURL)
            .then(res => {
                const books = res.data;
                // console.log(books);
                this.setState({ books: books.items });                
            })
            

      
    }

    saveBook = (book) => {
        // console.log(book) 
         axios.post("/api/books/", book)
         .then(console.log("Saved Book Object: " , book))        
         .catch((e) => {
         console.log("Error Saving Book Object: " , book)
         })         
     }

    componentDidMount() {
        console.log("Mounted");   
    }

    handleBookClick = event => {
        let bookId = event; 
        // console.log(bookId);
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value
        });
        // console.log(this.state.search)
        this.searchBooks(this.state.search);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks (this.state.search);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Jumbotron/>
                </div>
                <div className="row">
                    <div className="row">
                        <h4>Book Search</h4>
                        <h6>Search for and Save Books of Interest</h6>
                    </div>
                    <SearchForm search={this.state.search} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}/>
                </div>
                <div className="row"> 
                {this.state.books.map( book => {
                    let image = ""

                    if(book.volumeInfo.imageLinks) {
                     image = book.volumeInfo.imageLinks.thumbnail 
                    }
                        else {image = "https://via.placeholder.com/128x150?text=No+image"}
    
                    // console.log("Card Info " + book.id)
                    // console.log("Card Info " + book.volumeInfo.title)
                    // console.log("Card Info " + book.volumeInfo.description)
                    // console.log("Card Info " + image)
                    // console.log("Card Info " + book.volumeInfo.imageLinks.thumbnail)
                    return <BookListCard key={book.id} title={book.volumeInfo.title} description={book.volumeInfo.description} image={image} link={book.volumeInfo.infoLink} book = {book} handleClick={this.saveBook}/>
                }
                )}
                   </div>
            </div>
        )
    }
}

export default SearchContainer;