import React from "react";
import './navigation.scss';
import {
    NavLink,
    // Link
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return(
            <div className="topnav">
                {/* <a className="active" href="/">Home</a>
                <a href="/Todos">Todos</a>
                <a href="/about">About</a> */}
                {/* <Link to='/'>Home</Link>
                <Link to='/Todos'>Todos</Link>
                <Link to='/about'>About</Link> */}
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/Todos" activeClassName="active" >
                    Todos
                </NavLink>
                <NavLink to="/about" activeClassName="active" >
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active" >
                    User
                </NavLink>
                

            </div>
        )
    }
};

export default Nav;