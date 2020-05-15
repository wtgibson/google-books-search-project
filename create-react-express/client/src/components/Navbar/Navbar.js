import React from "react";
import "./navbar.css";

// Passing props for image and function that determines if image was clicked before

function Navbar(props) {
    return (
        <nav>
            <div class="nav-wrapper teal">
                <ul id="nav-mobile" class="hide-on-med-and-down">
                    <li><a href="#" class="">Google Books</a></li>
                    <li className="active"><a href="#">Search</a></li>
                    <li><a href="#">Saved</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;