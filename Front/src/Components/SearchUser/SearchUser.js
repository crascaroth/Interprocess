import React, { useState, useContext } from "react";
import Context from "../../GlobalState/Context";
import SearchIcon from "@mui/icons-material/Search";

const SearchUser = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <div>
      <input placeholder="Search..."
      onChange={(e) =>
        setters.setNameFilter(e.target.value)
      }
      value={states.nameFilter}
      ></input>
      
      
      <button onClick={requests.filterByName}>
      <SearchIcon/>
      </button>
    </div>
  );
};

export default SearchUser;
