import React, { Component } from "react";
import BookListCard from "../../src/components/BookList";
import SearchForm from "./SearchForm";
import api from "../../../../../routes/api";
import Jumbotron from "../Jumbotron/Jumbotron";

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
                    <div className="row">
                        <h4>Book Search</h4>
                        <h6>Search for and Save Books of Interest</h6>
                    </div>
                    <SearchForm search={this.state.search} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}/>
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

export default SearchContainer;