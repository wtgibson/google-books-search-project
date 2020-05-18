import React from "react";
import "./bookList.css";

export default class BookListCard extends React.Component {
    render() {
        return (
            <div className="col s12 m7">
                <h4 className="header">{this.props.title}</h4>
                <p>{this.props.authors}</p>
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="" alt="book cover" src={this.props.image}></img>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{this.props.description}</p>
                        </div>
                        <div className="card-action">
                            <a class="waves-effect waves-light btn" href={this.props.link}>View</a>
                            <a class="waves-effect waves-light btn">Save</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
