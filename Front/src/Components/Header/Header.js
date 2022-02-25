import { useContext } from "react";
import NewUserModal from "./NewUserModal"
import Acme_logo from "../../Images/ACME_logo.jpg";
import Context from "../../GlobalState/Context";

const Header = () => {
  const { states, setters, requests } = useContext(Context);

  //   var modal = document.getElementById("myModal");

  //   // Get the button that opens the modal
  //   var btn = document.getElementById("myBtn");

  //   // Get the <span> element that closes the modal
  //   var span = document.getElementsByClassName("close")[0];

  //   // When the user clicks the button, open the modal
  //   btn.onclick = function () {
  //     modal.style.display = "block";
  //   };

  //   // When the user clicks on <span> (x), close the modal
  //   span.onclick = function () {
  //     modal.style.display = "none";
  //   };

  // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function (event) {
  //     if (event.target == modal) {
  //       modal.style.display = "none";
  //     }
  //   };



  return (
    <div>
      <img src={Acme_logo}></img>
      <NewUserModal/>
    </div>
  );
};

export default Header;
