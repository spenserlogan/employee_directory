import React from "react";
import "./style.css";

const Search = ({search, setSearch}) => {
    return(
        <nav className = "navbar navbar-dark bg-dark justify-content-center">
            <form className = "form-inline m-2">
                <input
                className = "form-control"
                name = "Search"
                type = "Search"
                placeholder = "Search"
                onChange = {e => setSearch(e.target.value)}
                value = {search}

                />
            </form>
        </nav>
    );
}

export default Search;