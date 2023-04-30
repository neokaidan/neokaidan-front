import React from "react";
import "./SearchBar.scss";

function Search() {
    return (
        <div className="search">
            <input className="search__input" type="input" placeholder="Поиск по статьям" />
            <img
                className="search__icon"
                src="./icons/search.svg"
                alt="search"
                width="24"
                height="24"
            />
        </div>
    );
}

export default Search;
