import { useContext } from "react";
import NewUserModal from "./NewUserModal"
import Acme_logo from "../../Images/ACME_logo.jpg";
import Context from "../../GlobalState/Context";

const Header = () => {
  const { states, setters, requests } = useContext(Context);

 

  return (
    <div>
      <img src={Acme_logo}></img>
      <NewUserModal/>
    </div>
  );
};

export default Header;
