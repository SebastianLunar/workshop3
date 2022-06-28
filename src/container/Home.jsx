import React from "react";
import Avatar from "@mui/material/Avatar";
import { HomeDiv, Menu } from "../styles/HomeStyles";
import { ReactComponent as Bell } from "../assets/images/Notification.svg";
import { Banners } from "../components/Banners";
import { Card } from "../components/Card";
import { NavBars } from "../components/NavBars";

export const Home = () => {
  return (
    <HomeDiv>
      <Menu>
        <div>
          <Avatar src="" alt="nombre" />
          <div>
            <span>Hi!</span>
            <span>Nombre de usuario</span>
          </div>
        </div>
        <Bell />
      </Menu>
      <Banners />
      <span className="reco">Recommended to you</span>
      <Card />
      <NavBars active={"active"} />
    </HomeDiv>
  );
};
