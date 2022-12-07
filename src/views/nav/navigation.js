import React from "react";
import './navigation.scss';

class Nav extends React.Component {
    render() {
        return(
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/Todos">Todos</a>
                <a href="/about">About</a>
            </div>
        )
    }
};

export default Nav;