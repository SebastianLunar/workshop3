import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { HomeDiv, Menu } from "../styles/HomeStyles";
import { ReactComponent as Bell } from "../assets/images/Notification.svg";
import { Banners } from "../Components/Banners";
import { Card } from "../Components/Card";
import { NavBars } from "../Components/NavBars";
import { useSelector, useDispatch } from "react-redux";
import { actionLogoutAsync } from "../redux/actions/actionLogin";
import { getAuth } from "firebase/auth";

export const Home = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setProfile(user);
    }
  }, []);

  return (
    <HomeDiv>
      <Menu>
        <div>
          <Avatar src={profile?.photoURL} alt={profile?.displayName} />
          <div>
            <span>Hi!</span>
            <span>{profile?.displayName}</span>
          </div>
        </div>
        <Bell onClick={() => dispatch(actionLogoutAsync())} />
      </Menu>
      <Banners />
      <span className="reco">Recommended to you</span>
      <Card />
      <NavBars active={"active"} />
    </HomeDiv>
  );
};
