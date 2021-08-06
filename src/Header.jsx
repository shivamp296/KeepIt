import React from "react";
import logo from "./Images/notebook-logo.png";

const Header=()=>{
    return (
        <>
        <div className="header">
            <img src={logo} style={{height:70}}alt="logo"/>
            <h1>NoteIt</h1>
        </div>
        </>
    );
};

export default Header;