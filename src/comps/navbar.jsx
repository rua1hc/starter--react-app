import React, { Component } from "react";

//Stateless Functional Component

class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                        <span className="btn ">{this.props.totalCounters}</span>
                    </a>
                </div>
            </nav>
        );
    }
}

export default NavBar;
