import React from "react";
// import "./navbar.css";

// Passing props for image and function that determines if image was clicked before

function Navbar(props) {
    return (
        <nav>
            <div className="nav-wrapper teal">
                <ul id="nav-mobile" className="hide-on-med-and-down">
                    <li><a href="#" className="title">Google Books</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Saved</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;