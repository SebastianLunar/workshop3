import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  HeartOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { NavIcons, NavLi, NavStyled } from "../styles/NavBarsStyles";

export const NavBars = ({ active }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavStyled>
      <NavIcons value={value} onChange={handleChange} aria-label="nav icons">
        <NavLi>
          <NavLink to="/" className={active === "active" ? active : ""}>
            <HomeOutlined />
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/search" className={active === "active" ? active : ""}>
            <SearchOutlined />
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/create" className={active === "active" ? active : ""}>
            <PlusCircleOutlined />
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/favorites" className={active === "active" ? active : ""}>
            <HeartOutlined />
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/chat" className={active === "active" ? active : ""}>
            <MailOutlined />
          </NavLink>
        </NavLi>
      </NavIcons>
    </NavStyled>
  );
};
