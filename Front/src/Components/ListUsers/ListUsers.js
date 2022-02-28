import React, { useState, useContext, useEffect } from "react";
import Context from "../../GlobalState/Context";

const ListUsers = () => {
  var { states, setters, requests } = useContext(Context);

  useEffect(() => {}, [states.allUsers]);

  if (states.nameFilter != "") {
    return (
      <div>
        {states.filteredArray.map((user) => {
          return (
            <div>
              <div>{user.name ? user.name : "Nome vazio"}</div>
              <div>
                {user.birthDate ? user.birthDate : "Data de nascimento Vazia"}
              </div>
              <div>{user.CPF ? user.CPF : "CPF Vazio"}</div>
              <div>{user.sex ? user.sex : "Sexo vazio"}</div>
              <div>{user.address ? user.address : "Endereço vazio"}</div>
              <div>{user.status}</div>
              <br></br>
            </div>
          );
        })}
      </div>
    );


  } else {
    if (states.allUsers != null) {
      return (
        <div>
          {states.allUsers.map((user) => {
            return (
              <div>
                <div>{user.name ? user.name : "Nome vazio"}</div>
                <div>
                  {user.birthDate ? user.birthDate : "Data de nascimento Vazia"}
                </div>
                <div>{user.CPF ? user.CPF : "CPF Vazio"}</div>
                <div>{user.sex ? user.sex : "Sexo vazio"}</div>
                <div>{user.address ? user.address : "Endereço vazio"}</div>
                <div>{user.status}</div>
                <br></br>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <div>Lista Vazia</div>
        </div>
      );
    }
  }
};
export default ListUsers;
