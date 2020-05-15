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
            <div class="row">
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Harry Potter</label>
                    <span class="helper-text" data-error="wrong" data-success="right">Book Title</span>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Search;