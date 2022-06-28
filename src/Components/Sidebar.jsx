import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import img1 from "../images/Profile_img.svg";
/* import {useSelector} from 'react-redux' */

function Sidebar() {
  /*   const { user } = useSelector((store) => store.userStore); */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="my-3 mx-3">
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="d-flex"> 
              <img src={img1}/* {user.img} */ alt="profile" />
              <h4 className="m-auto ms-3">Jacob jones{/* {user.anme} */}</h4>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>Active ads</h5>
          <h5>Inactive ads</h5>
          <h5>Payment</h5>
          <h5>Term of use</h5>
          <h5>Security Policy</h5>
          <h5>About use</h5>


        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Sidebar;
