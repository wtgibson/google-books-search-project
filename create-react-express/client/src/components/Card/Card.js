import React from "react";
import "./card.css";

// Passing props for image and function that determines if image was clicked before

function Card(props) {
    return (
        <div className="row">
            <div className="col s12">
                    <div className="card">
                        <img className="" src={props.image} alt={props.id}></img>
                    </div>
            </div>
        </div>
    );
};

export default Card;