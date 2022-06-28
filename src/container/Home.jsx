import React from "react";
import Avatar from "@mui/material/Avatar";
import { HomeDiv, Menu } from "../styles/HomeStyles";
import { ReactComponent as Bell } from "../assets/images/Notification.svg";
import { Banners } from "../Components/Banners";
import { Card } from "../Components/Card";
import { NavBars } from "../Components/NavBars";
import { useSelector } from "react-redux";

export const Home = () => {
  const { user } = useSelector((store) => store.registerStore);

  return (
    <HomeDiv>
      <Menu>
        <div>
          <Avatar src={user?.image} alt="nombre" />
          <div>
            <span>Hi!</span>
            <span>{user?.name}</span>
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
