import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Results from './components/Results/Results';
import BookListCard from './components/BookList/BookList';
import BookList from './components/BookList/BookList';
import Search from "./components/Search/Search";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   router.get(this.state.recipeSearch)
  //     .then(res => this.setState({ recipes: res.data }))
  //     .catch(err => console.log(err));
  // };
  

  render () {
    return (
    
    <div className="beginning">
      <Navbar/>
      <div className="section center-align row">
        <div className="section blue-grey lighten-5">
          <Jumbotron/>
        </div>
        <div className="divider"></div>
        <div className="section">
          <Search/>
        </div>
        <div className="divider"></div>
        <div className="section">
          <Results />
          <div className="container">
            <BookList>
              {this.state.books.map(book => {
                return (
                      <BookListCard
                        key={book.title}
                        title={book.title}
                        href={book.link}
                        description={book.description}
                        authors={book.authors}
                        image={book.image}
                      />
                    );
                  })}
            </BookList>
          </div>
        </div>

      </div>
    </div>
    )
  };
};


export default App;
