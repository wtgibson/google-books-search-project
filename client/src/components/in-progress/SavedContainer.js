import React, { Component } from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import BookListCard from "../components"

class SavedContainer extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <Jumbotron/>
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

export default SavedContainer;