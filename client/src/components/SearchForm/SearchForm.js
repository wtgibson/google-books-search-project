import React from "react";                    

function SearchForm(props) {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                    <textarea id="search" className="materialize-textarea form-control" onChange={props.handleInputChange} value={props.search} name="search" type="text"></textarea>
                    <label for="search">Title, Author, Genre, etc.</label>
                    <span className="helper-text" data-error="wrong" data-success="right">Search For a Book</span>
                    </div>
                </div>
            </form>
            {/* <button onClick={props.handleFormSubmit} className="waves-effect waves-light btn">Search</button> */}
        </div>
    )
};

export default SearchForm;

                    