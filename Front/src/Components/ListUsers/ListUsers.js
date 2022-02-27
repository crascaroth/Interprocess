import React, { useState, useContext, useEffect } from "react";
import Context from "../../GlobalState/Context";





const ListUsers = () => {
  var { states, setters, requests } = useContext(Context);

  useEffect(() => {
    
  }, [states.allUsers]);

  
  if (states.allUsers != null) {
    return (
      <div>         
        {states.allUsers.map((user) => {
            return(
          <div>
            <div>{user.name}</div>
            <div>{user.birthDate}</div>
            <div>{user.CPF}</div>
            <div>{user.sex}</div>
            <div>{user.address}</div>
            <div>{user.status}</div>
          </div>
            )
        })}
      </div>
    );
  }
  else {
    return(        
      <div>
        <div>Lista Vazia</div>
      </div>      
    );
  }

};
export default ListUsers;
