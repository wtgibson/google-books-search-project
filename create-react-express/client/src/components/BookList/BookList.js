import React from "react";
import "./bookList.css";

// Passing props for image and function that determines if image was clicked before

export function BookList({ children }) {
    return <div className="container">{children}</div>;
}

export function BookListCard({
    title,
    authors,
    description,
    image,
    link
}) {
    return (
        <div className="col s12 m7">
            <h4 className="header">{title}</h4>
            <p>{authors}</p>
            <div className="card horizontal">
            <div className="card-image">
                <img className="" src={image}></img>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                <p>{description}</p>
                </div>
                <div className="card-action">
                    <a class="waves-effect waves-light btn" href={link}>View</a>
                    <a class="waves-effect waves-light btn">Save</a>                
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookListCard;