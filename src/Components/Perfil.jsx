import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
/* import {useSelector} from 'react-redux' */
import img from '../images/Profile_img.svg'


const Perfil = () => {
/*   const { user } = useSelector((store) => store.userStore); */

  return (
    <div className="container mt-5">
      <div className="text-center">
        <img  src={img}/*{user.imgage}  */alt="" style={{ width: "100px" }} />
      </div>
      <div className=" mt-2 ">
        <Button
          href="/profile/1"
          variant="light"
          size="lg"
          className="w-100  "
          style={{ backgroundColor: "rgba(180, 255, 216, 1)" }}
        >
          <div className=" w-50  d-flex">
            <div className="ms-2">
              <p className="m-auto"> Jacob jones{/* {user.name} */}</p>
            </div>
          </div>
        </Button>
      </div>
      <div className=" mt-2 ">
        <Button
          href="/agregarRestarente"
          variant="light"
          size="lg"
          className="w-100 "
          style={{ backgroundColor: "rgba(180, 255, 216, 1)" }}
        >
          <div className=" w-50  d-flex">
            <div className="ms-2">
              <p className="m-auto">example@gmail.com{/* {user.email} */}</p>
            </div>
          </div>
        </Button>
      </div>
      <div className=" mt-2 ">
        <Button
          variant="light"
          size="lg"
          className="w-100 "
          style={{ backgroundColor: "rgba(180, 255, 216, 1)" }}
        >
          <div className=" w-50  d-flex  ">
            <div className="ms-2">
              <p className="m-auto">+1(696)456345</p>
            </div>
          </div>
        </Button>
      </div>
      <div className=" mt-2 ">
        <Button
          variant="light"
          size="lg"
          className="w-100 "
          style={{ backgroundColor: "rgba(180, 255, 216, 1)" }}
        >
          <div className=" w-50  d-flex">
            <div className="ms-2">
              <p className="m-auto">Country{/* {user.country} */}</p>
            </div>
          </div>
        </Button>
      </div>
      <div className=" mt-2 ">
        <Button
          variant="light"
          size="lg"
          className="w-100 "
          style={{ backgroundColor: "rgba(180, 255, 216, 1)" }}
        >
          <div className=" w-50  d-flex">
            <div className="ms-2">
              <p className="m-auto">Notifications</p>
            </div>
          </div>
        </Button>
      </div>
      <div className=" mt-2 ">
        <Button
          variant="light"
          size="lg"
          className="w-100 "
          style={{ backgroundColor: "rgba(180, 255, 216, 1)" }}
        >
          <div className=" w-50  d-flex">
            <div className="ms-2">
              <p className="m-auto">Payment</p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Perfil;
