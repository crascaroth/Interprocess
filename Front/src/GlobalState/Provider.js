import React, { useState } from "react";
import Context from "../GlobalState/Context.js";

const Provider = (props) => {
  var [userInfo, setUserInfo] = useState({
    name: "",
    birthDate: "",
    CPF: 0,
    sex: "",
    address: "",
    status: false,
  });

  var [allUsers, setAllUsers] = useState([]);

  const saveUser = () => {
    setAllUsers([...allUsers, userInfo]);
    console.log(allUsers);
  };

  const states = { userInfo, allUsers };
  const setters = { setUserInfo, setAllUsers };
  const requests = { saveUser };

  const data = { states, setters, requests };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default Provider;
