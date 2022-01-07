import React from "react";
import './header.scss';

const Header: React.FC<any> = (props) => {

    return <header className="header">
            <div className="left">
                <div className="logo"></div>
                <div className="menu"></div>
                <div className="search"></div>
            </div>
            <div className="right">
                <div className="help"></div>
                <div className="notifications"></div>
                <div className="login"></div>
            </div>
        </header>


};

export default Header;