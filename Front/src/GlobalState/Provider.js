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



  const confirmation = () => console.log(userInfo)

  const states = { userInfo };
  const setters = { setUserInfo };
  const requests = { confirmation };

  const data = { states, setters, requests };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default Provider;
