import React from "react";
import "./search.css";

// Passing children elements

function Search(props) {
    return (
        <div className="container">
            <div className="row">
                <h4>Book Search</h4>
                <h6>Search for and Save Books of Interest</h6>
            </div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
<<<<<<< HEAD:client/src/components/Search/Search.js
                        <textarea id="search" className="materialize-textarea form-control" onChange={props.handleInputChange} value={props.search} name="search" type="text"></textarea>
                        <label for="search">Harry Potter</label>
=======
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor="textarea1">Harry Potter</label>
>>>>>>> 6be7fcc930da11f8c69b1b232717e4df861aeea2:create-react-express/client/src/components/Search/Search.js
                        <span className="helper-text" data-error="wrong" data-success="right">Book Title</span>
                        </div>
                    </div>
                </form>
                <button onClick={props.handleFormSubmit} className="waves-effect waves-light btn">Search</button>
            </div>
        </div>
    );
};

export default Search;