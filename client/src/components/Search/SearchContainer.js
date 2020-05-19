import React, { Component } from "react";
import BookList from "../BookList";
import Search from "./Search";
import api from "../../../../../routes/api";
import Jumbotron from "../Jumbotron/Jumbotron";
import BookListCard from "../BookList/BookList";

class SearchContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        console.log("Mounted");
        this.searchBooks("Harry Potter");
    }

    searchBooks = query => {
        api.search(query)
        .then(res => this.setState)
    }

    handleBookClick = event => {
        let bookId = event; 
        console.log(bookId);
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value
        });

    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.seachBooks (this.state.search);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Jumbotron/>
                </div>
                <div className="row">
                    <Search search={this.state.search} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange}/>
                </div>
                <div className="row">
                    {this.state.results.map(book => (
                        <BookListCard id={book.volumeInfo.id} key={book.volumeInfo.title} title={book.volumeInfo.title} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.thumbnail} link={book.volumeInfo.infoLink} handleClick={this.handleBookClick}/>

                    ))}
                </div>
            </div>
        )
    }
}