import React from "react";
import "./bookList.css";
import axios from "axios";
import BookListCard from "./bookListCard";

// Passing props for image and function that determines if image was clicked before

export default class BookList extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        axios.get(`/api/books`)
            .then(res => {
                const books = res.data;
                console.log(books);
                this.setState({ books });
            })
    }
    render() {
        return (
            <div>
                {this.state.books.map(book => {return <BookListCard title = {book.title} />})}
            </div>
        )
        //fetch("/api/books")
        //.then(res => res.json())
        //.then(data => {
        //console.log(data);
        //})
        //return <div className="container">{children}</div>;
    }
};