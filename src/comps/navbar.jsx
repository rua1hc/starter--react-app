import React, { Component } from "react";

//Stateless Functional Component
const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className="btn ">{props.totalCounters}</span>
                </a>
            </div>
        </nav>
    );
};
// Obj destructuring
const NavBar1 = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className="btn ">{totalCounters}</span>
                </a>
            </div>
        </nav>
    );
};

// class NavBar extends Component {
//     state = {};
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">
//                         Navbar
//                         <span className="btn ">{this.props.totalCounters}</span>
//                     </a>
//                 </div>
//             </nav>
//         );
//     }
// }

export default NavBar;
