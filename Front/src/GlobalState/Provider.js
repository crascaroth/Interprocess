import React, { useState } from "react";
import Context from "../GlobalState/Context.js";

const Provider = (props) => {
  var [userInfo, setUserInfo] = useState({
    name: "",
    birthDate: "",
    CPF: 0,
    sex: "",
    address: "",
    status: true,
  });

  var [allUsers, setAllUsers] = useState([]);
  var [nameFilter,setNameFilter] = useState("")
  var [filteredArray,setFilteredArray] = useState([])

  const saveUser = () => {
    setAllUsers([...allUsers, userInfo]);
    console.log(allUsers);
  };

  const filterByName = () => {
  const filteredArray = allUsers.filter(element => element.name == nameFilter)
  setFilteredArray(filteredArray)  
  }
  

  const states = { userInfo, allUsers,nameFilter, filteredArray };
  const setters = { setUserInfo, setAllUsers,setNameFilter, setFilteredArray };
  const requests = { saveUser, filterByName };

  const data = { states, setters, requests };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default Provider;
