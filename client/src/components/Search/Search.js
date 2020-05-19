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
                        <textarea id="search" className="materialize-textarea form-control" onChange={props.handleInputChange} value={props.search} name="search" type="text"></textarea>
                        <label for="search">Harry Potter</label>
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