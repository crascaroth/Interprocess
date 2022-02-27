import React, { useState, useContext } from "react";
import Context from "../../GlobalState/Context";

const SearchUser = () => {
    
    const { states, setters, requests } = useContext(Context);

    return(
        <div>
            <input placeholder="Search..."></input>
            <button><img src></img></button>
        </div>
    )
}

export default SearchUser;