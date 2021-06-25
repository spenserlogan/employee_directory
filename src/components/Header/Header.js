import React from "react";
import "./style.css";

const Header = () => {
    return(
        <header> 
            <h1 className = "text-center">Employee Directory</h1>
            <p className = "text-center">To sort, click on the columns</p>
        </header>
    );
}

export default Header;