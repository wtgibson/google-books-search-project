import React from "react";
import "./card.css";

// Passing props for image and function that determines if image was clicked before

function Card(props) {
    return (
        <div className="col s12 m7">
            <h4 className="header">Harry Potter's Bookshelf</h4>
            <p>The Great Books behind the Hogwartz Adventures</p>
            <p>Written By John Grainger</p>
            <div className="card horizontal">
            <div className="card-image">
                <img className="" src={props.image} alt={props.id}></img>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                <p>Book Description</p>
                </div>
                <div className="card-action">
                    <a class="waves-effect waves-light btn">View</a>
                    <a class="waves-effect waves-light btn">Save</a>                
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;